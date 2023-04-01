import {
  spawn,
  SpawnOptionsWithoutStdio,
  ChildProcessWithoutNullStreams,
} from "node:child_process";
import { promisify } from "node:util";
import treeKill from "tree-kill";
import onExit from "signal-exit";

const pTreeKill = promisify(treeKill);

export interface SpawndChildProcess extends ChildProcessWithoutNullStreams {
  destroy: () => Promise<void>;
}

export type SpawndOptions = SpawnOptionsWithoutStdio;

export const spawnd = (command: string, options?: SpawndOptions) => {
  const proc = spawn(command, options) as SpawndChildProcess;

  const cleanExit = (code = 1) => {
    if (proc && proc.pid) {
      treeKill(proc.pid, () => process.exit(code));
    } else {
      process.exit(code);
    }
  };

  const cleanExit1 = () => cleanExit(1);

  proc.stderr.pipe(process.stderr);
  proc.on("exit", cleanExit);
  proc.on("error", cleanExit1);

  const offExit = onExit((code) => {
    cleanExit(typeof code === "number" ? code : 1);
  });

  proc.destroy = async () => {
    offExit();
    proc.removeListener("exit", cleanExit);
    proc.removeListener("error", cleanExit1);
    if (typeof proc.pid === "number") {
      await pTreeKill(proc.pid).catch(() => {
        /* ignore error */
      });
    }
  };

  return proc;
};
