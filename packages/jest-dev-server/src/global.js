/* eslint-disable no-console */
import stream from 'stream'
import net from 'net'
import chalk from 'chalk'
import spawnd from 'spawnd'
import cwd from 'cwd'
import waitPort from 'wait-port'
import findProcess from 'find-process'
import { promisify } from 'util'
import terminate from 'terminate'
import inquirer from 'inquirer'

const DEFAULT_CONFIG = {
  debug: false,
  options: {},
  launchTimeout: 5000,
  host: null,
  port: null,
  protocol: null,
  usedPortAction: 'ask',
}

const pterminate = promisify(terminate)

const serverLogPrefixer = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(chalk.magentaBright(`[Jest Dev server] ${chunk.toString()}`))
    callback()
  },
})

export const ERROR_TIMEOUT = 'ERROR_TIMEOUT'
export const ERROR_PORT_USED = 'ERROR_PORT_USED'
export const ERROR_NO_COMMAND = 'ERROR_NO_COMMAND'
export class JestDevServerError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

let server

function logProcDetection(proc, port) {
  console.log(
    chalk.blue(
      `🕵️  Detecting a process "${proc.name}" running on port "${port}"`,
    ),
  )
}

async function killProc(proc) {
  console.log(chalk.yellow(`Killing process ${proc.name}...`))
  await pterminate(proc.pid)
  console.log(chalk.green(`Successfully killed process ${proc.name}`))
}

function runServer(config = {}) {
  if (!config.command) {
    throw new JestDevServerError(
      'You must define a `command`',
      ERROR_NO_COMMAND,
    )
  }

  server = spawnd(config.command, {
    shell: true,
    env: process.env,
    cwd: cwd(),
    ...config.options,
  })

  if (config.debug) {
    // eslint-disable-next-line no-console
    console.log(chalk.magentaBright('\nJest dev-server output:'))
    server.stdout.pipe(serverLogPrefixer).pipe(process.stdout)
  }
}

async function outOfStin(block) {
  const { stdin } = process
  const listeners = stdin.listeners('data')
  const result = await block()
  listeners.forEach(listener => stdin.on('data', listener))
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.resume()
  return result
}

function getIsPortTaken(port) {
  let server
  const cleanupAndReturn = result =>
    new Promise(resolve => server.once('close', () => resolve(result)).close())
  return new Promise((resolve, reject) => {
    server = net
      .createServer()
      .once('error', err =>
        err.code === 'EADDRINUSE' ? resolve(cleanupAndReturn(true)) : reject(),
      )
      .once('listening', () => resolve(cleanupAndReturn(false)))
      .listen(port)
  })
}

export async function setup(providedConfig) {
  const config = { ...DEFAULT_CONFIG, ...providedConfig }

  const usedPortHandlers = {
    error() {
      throw new JestDevServerError(
        `Port ${config.port} is in use`,
        ERROR_PORT_USED,
      )
    },
    async kill() {
      console.log('')
      console.log(
        `Killing process listening to ${
          config.port
        }. On linux, this may require you to enter your password.`,
      )
      const [portProcess] = await findProcess('port', config.port)
      logProcDetection(portProcess, config.port)
      killProc(portProcess)
    },
    async ask() {
      console.log('')
      const answers = await outOfStin(() =>
        inquirer.prompt([
          {
            type: 'confirm',
            name: 'kill',
            message: `Another process is listening on ${
              config.port
            }. Should I kill it for you? On linux, this may require you to enter your password.`,
            default: true,
          },
        ]),
      )
      if (answers.kill) {
        const [portProcess] = await findProcess('port', config.port)
        logProcDetection(portProcess, config.port)
        await killProc(portProcess)
      } else {
        process.exit(1)
      }
    },
    ignore() {},
  }

  const usedPortHandler = usedPortHandlers[config.usedPortAction]
  if (!usedPortHandler) {
    const availableActions = Object.keys(usedPortHandlers)
      .map(action => `\`${action}\``)
      .join(', ')
    throw new JestDevServerError(
      `Invalid \`usedPortAction\`, only ${availableActions} are possible`,
    )
  }

  if (config.port) {
    const isPortTaken = await getIsPortTaken(config.port)
    if (isPortTaken) {
      await usedPortHandler()
    }
  }

  runServer(config)

  if (config.port) {
    const { launchTimeout } = config

    let timeout
    await Promise.race([
      new Promise((resolve, reject) => {
        timeout = setTimeout(
          () =>
            reject(
              new JestDevServerError(
                `Server has taken more than ${launchTimeout}ms to start.`,
                ERROR_TIMEOUT,
              ),
            ),
          launchTimeout,
        )
      }),
      waitPort({
        host: config.host,
        output: 'silent',
        port: config.port,
        protocol: config.protocol,
      }),
    ])
    clearTimeout(timeout)
  }
}

export async function teardown() {
  if (server) await server.destroy()
}
