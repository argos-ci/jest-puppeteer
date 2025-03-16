import chalk from "chalk";

const CTRL_C = "\u0003";
const CTRL_D = "\u0004";
const ENTER = "\r";

export const blockStdin = (): Promise<void> => {
  console.log(chalk.blue("\n\n🕵️‍  Code is paused, press enter to resume"));
  return new Promise<void>((resolve) => {
    const { stdin } = process;
    const onKeyPress = (key: string) => {
      if (key === CTRL_C || key === CTRL_D || key === ENTER) {
        stdin.removeListener("data", onKeyPress);
        if (!listening) {
          if (stdin.isTTY) {
            stdin.setRawMode(false);
          }
          stdin.pause();
        }
        resolve();
      }
    };
    const listening = stdin.listenerCount("data") > 0;
    if (!listening) {
      if (stdin.isTTY) {
        stdin.setRawMode(true);
      }
      stdin.resume();
      stdin.setEncoding("utf8");
    }
    stdin.on("data", onKeyPress);
  });
};
