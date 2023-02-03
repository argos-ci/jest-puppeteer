import { promisify } from "util";
import { spawn } from "child_process";
import treeKill from "tree-kill";
import exit from "exit";
import onExit from "signal-exit";

const pTreeKill = promisify(treeKill);

function spawnd(command, options) {
  function cleanExit(code = 1) {
    if (proc && proc.pid) {
      treeKill(proc.pid, () => exit(code));
    } else {
      exit(code);
    }
  }

  const proc = spawn(command, options);
  proc.stderr.pipe(process.stderr);
  proc.on("exit", cleanExit);
  proc.on("error", () => cleanExit(1));

  const removeExitHandler = onExit((code) => {
    cleanExit(typeof code === "number" ? code : 1);
  });

  proc.destroy = async () => {
    removeExitHandler();
    proc.removeAllListeners("exit");
    proc.removeAllListeners("error");
    return pTreeKill(proc.pid).catch(() => {
      /* ignore error */
    });
  };

  return proc;
}

export default spawnd;
