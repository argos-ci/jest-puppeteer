/* eslint-disable no-console */
import stream from "stream";
import net from "net";
import chalk from "chalk";
import spawnd from "spawnd";
import cwd from "cwd";
import waitOn from "wait-on";
import findProcess from "find-process";
import { promisify } from "util";
import treeKill from "tree-kill";
import prompts from "prompts";

const DEFAULT_CONFIG = {
  debug: false,
  options: {},
  launchTimeout: 5000,
  host: "localhost",
  port: null,
  protocol: "tcp",
  usedPortAction: "ask",
  waitOnScheme: {},
};

const pTreeKill = promisify(treeKill);

const serverLogPrefixer = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(chalk.magentaBright(`[Jest Dev server] ${chunk.toString()}`));
    callback();
  },
});

export const ERROR_TIMEOUT = "ERROR_TIMEOUT";
export const ERROR_PORT_USED = "ERROR_PORT_USED";
export const ERROR_NO_COMMAND = "ERROR_NO_COMMAND";
export class JestDevServerError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const servers = [];

function logProcDetection(proc, port) {
  console.log(
    chalk.blue(
      `🕵️  Detecting a process "${proc.name}" running on port "${port}"`
    )
  );
}

async function killProc(proc) {
  console.log(chalk.yellow(`Killing process ${proc.name}...`));
  await pTreeKill(proc.pid);
  console.log(chalk.green(`Successfully killed process ${proc.name}`));
}

function runServer(config = {}, index = 0) {
  if (!config.command) {
    throw new JestDevServerError(
      "You must define a `command`",
      ERROR_NO_COMMAND
    );
  }

  servers[index] = spawnd(config.command, {
    shell: true,
    env: process.env,
    cwd: cwd(),
    ...config.options,
  });

  if (config.debug) {
    // eslint-disable-next-line no-console
    console.log(chalk.magentaBright("\nJest dev-server output:"));
    servers[index].stdout.pipe(serverLogPrefixer).pipe(process.stdout);
  } else {
    servers[index].stdout.on("data", () => {});
  }
}

async function outOfStin(block) {
  const { stdin } = process;
  const listeners = stdin.listeners("data");
  const result = await block();
  listeners.forEach((listener) => stdin.on("data", listener));
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return result;
}

async function getIsPortTaken(config) {
  let server;
  const cleanupAndReturn = (result) =>
    new Promise((resolve) => {
      server.once("close", () => resolve(result)).close();
    });
  const val = await new Promise((resolve, reject) => {
    server = net
      .createServer()
      .once("error", (err) =>
        err.code === "EADDRINUSE" ? resolve(cleanupAndReturn(true)) : reject()
      )
      .once("listening", () => resolve(cleanupAndReturn(false)))
      .listen(config.port, config.host);
  });
  return val;
}

export async function setup(providedConfigs) {
  // Compatible with older versions
  const configs = Array.isArray(providedConfigs)
    ? providedConfigs
    : [providedConfigs];
  await Promise.all(
    configs.map((providedConfig, index) =>
      setupJestServer(providedConfig, index)
    )
  );
}

async function setupJestServer(providedConfig, index) {
  const config = { ...DEFAULT_CONFIG, ...providedConfig };

  const usedPortHandlers = {
    error() {
      throw new JestDevServerError(
        `Port ${config.port} is in use`,
        ERROR_PORT_USED
      );
    },
    async kill() {
      console.log("");
      console.log(
        `Killing process listening to ${config.port}. On linux, this may require you to enter your password.`
      );
      const [portProcess] = await findProcess("port", config.port);
      logProcDetection(portProcess, config.port);
      await killProc(portProcess);
    },
    async ask() {
      console.log("");
      const answers = await outOfStin(() =>
        prompts({
          type: "confirm",
          name: "kill",
          message: `Another process is listening on ${config.port}. Should I kill it for you? On linux, this may require you to enter your password.`,
          initial: true,
        })
      );
      if (answers.kill) {
        const [portProcess] = await findProcess("port", config.port);
        logProcDetection(portProcess, config.port);
        await killProc(portProcess);
      } else {
        process.exit(1);
      }
    },
    ignore() {},
  };

  const usedPortHandler = usedPortHandlers[config.usedPortAction];
  if (!usedPortHandler) {
    const availableActions = Object.keys(usedPortHandlers)
      .map((action) => `\`${action}\``)
      .join(", ");
    throw new JestDevServerError(
      `Invalid \`usedPortAction\`, only ${availableActions} are possible`
    );
  }

  if (config.port) {
    const isPortTaken = await getIsPortTaken(config);
    if (isPortTaken) {
      await usedPortHandler();
    }

    if (config.usedPortAction === "ignore" && isPortTaken) {
      console.log("");
      console.log("Port is already taken. Assuming server is already running.");
    } else {
      runServer(config, index);
    }
  } else {
    runServer(config, index);
  }

  if (config.port) {
    const { launchTimeout, protocol, host, port, path, waitOnScheme } = config;

    let resource = `${host}:${port}`;
    if (path) {
      resource = `${resource}/${path}`;
    }

    let url = "";
    if (protocol === "tcp" || protocol === "socket") {
      url = `${protocol}:${resource}`;
    } else {
      url = `${protocol}://${resource}`;
    }
    const opts = {
      resources: [url],
      timeout: launchTimeout,
      ...waitOnScheme,
    };

    try {
      await waitOn(opts);
    } catch (err) {
      if (err.message.startsWith("Timed out")) {
        throw new JestDevServerError(
          `Server has taken more than ${launchTimeout}ms to start.`,
          ERROR_TIMEOUT
        );
      }

      throw err;
    }
  }
}

export function getServers() {
  return servers;
}

export async function teardown() {
  if (servers.length) {
    await Promise.all(servers.map((server) => server.destroy()));
  }
}
