import { cpus } from "node:os";
import type { Config as JestConfig } from "jest";
import type { JestPuppeteerConfig } from "./config";
import type { PuppeteerNode, Browser } from "puppeteer";

const getPuppeteer = (): PuppeteerNode => {
  try {
    return require("puppeteer");
  } catch (e) {
    return require("puppeteer-core");
  }
};

const getWorkersCount = (jestConfig: JestConfig): number => {
  if (jestConfig.maxWorkers != null) return Number(jestConfig.maxWorkers);
  if (jestConfig.watch || jestConfig.watchAll) return 1;
  return cpus().length - 1;
};

const openBrowser = async (config: JestPuppeteerConfig): Promise<Browser> => {
  const puppeteer = getPuppeteer();
  if (config.connect) {
    return puppeteer.connect(config.connect);
  }
  return puppeteer.launch(config.launch);
};

const closeBrowser = async (
  config: JestPuppeteerConfig,
  browser: Browser,
): Promise<void> => {
  if (config.connect) {
    return browser.disconnect();
  }
  return browser.close();
};

const saveWorkersCount = (workersCount: number): void => {
  process.env.WORKERS_COUNT = workersCount.toString();
};

const readWorkersCount = (): number => {
  if (!process.env.WORKERS_COUNT) {
    throw new Error("Invariant: WORKERS_COUNT not found");
  }
  return Number(process.env.WORKERS_COUNT);
};

const saveWsEndpoints = (wsEndpoints: string[]): void => {
  process.env.PUPPETEER_WS_ENDPOINTS = JSON.stringify(wsEndpoints);
};

const readWsEndpoints = (): string[] => {
  if (!process.env.PUPPETEER_WS_ENDPOINTS) {
    throw new Error("Invariant: PUPPETEER_WS_ENDPOINTS not found");
  }
  return JSON.parse(process.env.PUPPETEER_WS_ENDPOINTS);
};

const getJestWorkerId = (): number => {
  if (!process.env.JEST_WORKER_ID) {
    throw new Error("Invariant: JEST_WORKER_ID not found");
  }
  return Number(process.env.JEST_WORKER_ID);
};

const getWorkerIndex = () => {
  // Jest worker ID starts at 1
  return getJestWorkerId() - 1;
};

const getWorkerWsEndpointIndex = () => {
  return Math.min(readWorkersCount() - 1, getWorkerIndex());
};

export const startBrowsers = async ({
  config,
  jestConfig,
}: {
  config: JestPuppeteerConfig;
  jestConfig: JestConfig;
}): Promise<Browser[]> => {
  const workersCount = getWorkersCount(jestConfig);
  saveWorkersCount(workersCount);

  if (config.connect?.browserWSEndpoint) {
    if (workersCount > 1) {
      throw new Error(
        "Cannot use `connect.browserWSEndpoint` with multiple workers. Set Jest `maxWorkers` to 1.",
      );
    }
    saveWsEndpoints([config.connect.browserWSEndpoint]);
    return [];
  }

  const browsers = await Promise.all(
    Array.from({ length: workersCount }).map(() => openBrowser(config)),
  );
  const wsEndpoints = browsers.map((browser) => browser.wsEndpoint());
  saveWsEndpoints(wsEndpoints);
  return browsers;
};

export const closeBrowsers = async (
  config: JestPuppeteerConfig,
  browsers: Browser[],
) => {
  await Promise.all(
    browsers.map(async (browser) => closeBrowser(config, browser)),
  );
};

const getWorkerWsEndpoint = (): string => {
  const wsEndpoints = readWsEndpoints();
  const index = getWorkerWsEndpointIndex();
  const endpoint = wsEndpoints[index];
  if (!endpoint) {
    throw new Error("Invariant: worker WS endpoint not found");
  }
  return endpoint;
};

export const connectBrowserFromWorker = async (
  config: JestPuppeteerConfig,
): Promise<Browser> => {
  const wsEndpoint = getWorkerWsEndpoint();
  const puppeteer = getPuppeteer();
  return puppeteer.connect({
    ...config.connect,
    ...config.launch,
    browserURL: undefined,
    browserWSEndpoint: wsEndpoint,
  });
};
