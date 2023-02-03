/* eslint-disable no-console */
import {
  setup as setupServer,
  teardown as teardownServer,
  ERROR_TIMEOUT,
  ERROR_NO_COMMAND,
} from "jest-dev-server";
import chalk from "chalk";
import { readConfig, getPuppeteer } from "./readConfig";

let browsers = [];

let didAlreadyRunInWatchMode = false;

async function openBrowser(puppeteer, config) {
  if (config.connect) {
    return puppeteer.connect(config.connect);
  }
  return puppeteer.launch(config.launch);
}

export async function setup(jestConfig = {}) {
  const config = await readConfig();
  const puppeteer = getPuppeteer();
  const browsersCount =
    config.browserPerWorker && !config.connect ? jestConfig.maxWorkers : 1;
  process.env.BROWSERS_COUNT = browsersCount;

  let wsEndpoints = [];
  if (config.connect && config.connect.browserWSEndpoint) {
    wsEndpoints = [config.connect.browserWSEndpoint];
  } else {
    browsers = await Promise.all(
      Array.from({ length: browsersCount }).map(() =>
        openBrowser(puppeteer, config)
      )
    );
    wsEndpoints = browsers.map((browser) => browser.wsEndpoint());
  }

  process.env.PUPPETEER_WS_ENDPOINTS = JSON.stringify(wsEndpoints);

  // If we are in watch mode, - only setupServer() once.
  if (jestConfig.watch || jestConfig.watchAll) {
    if (didAlreadyRunInWatchMode) return;
    didAlreadyRunInWatchMode = true;
  }

  if (config.server) {
    try {
      await setupServer(config.server);
    } catch (error) {
      if (error.code === ERROR_TIMEOUT) {
        console.log("");
        console.error(chalk.red(error.message));
        console.error(
          chalk.blue(
            `\n☝️ You can set "server.launchTimeout" in jest-puppeteer.config.js`
          )
        );
        process.exit(1);
      }
      if (error.code === ERROR_NO_COMMAND) {
        console.log("");
        console.error(chalk.red(error.message));
        console.error(
          chalk.blue(
            `\n☝️ You must set "server.command" in jest-puppeteer.config.js`
          )
        );
        process.exit(1);
      }
      throw error;
    }
  }
}

export async function teardown(jestConfig = {}) {
  const config = await readConfig();

  await Promise.all(
    browsers.map((browser) => {
      if (config.connect) {
        return browser.disconnect();
      }
      return browser.close().catch((e) => {
        console.error(`global.js teardown: Error closing browser ${e.stack}`);
      });
    })
  );

  if (!jestConfig.watch && !jestConfig.watchAll) {
    await teardownServer();
  }
}
