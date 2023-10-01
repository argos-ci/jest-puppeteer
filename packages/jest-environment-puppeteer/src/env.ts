/* eslint-disable no-debugger */
import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from "@jest/environment";
import NodeEnvironment from "jest-environment-node";
import { readConfig } from "./config";
import { blockStdin } from "./stdin";
import { connectBrowserFromWorker } from "./browsers";
import type { JestPuppeteerConfig } from "./config";
import type { Page, BrowserContext, Browser } from "puppeteer";

type JestPuppeteer = {
  debug: () => Promise<void>;
  resetPage: () => Promise<void>;
  resetBrowser: () => Promise<void>;
};

type StrictGlobal = {
  browser?: Browser | undefined;
  page?: Page | undefined;
  context?: BrowserContext | undefined;
  puppeteerConfig: JestPuppeteerConfig;
  jestPuppeteer: JestPuppeteer;
};

export type JestPuppeteerGlobal = Required<StrictGlobal>;

const testTimeoutSymbol = Symbol.for("TEST_TIMEOUT_SYMBOL");

const handlePageError = (error: Error) => {
  process.emit("uncaughtException", error);
};

const getBrowser = (global: StrictGlobal) => {
  if (!global.browser) {
    throw new Error("Cannot access browser before launching browser.");
  }
  return global.browser;
};

const getContext = (global: StrictGlobal) => {
  if (!global.context) {
    throw new Error("Cannot access context before launching context.");
  }
  return global.context;
};

const connectBrowser = async (global: StrictGlobal) => {
  if (global.browser) {
    throw new Error("Cannot connect browser before closing previous browser.");
  }
  global.browser = await connectBrowserFromWorker(global.puppeteerConfig);
};

const disconnectBrowser = async (global: StrictGlobal) => {
  if (!global.browser) return;
  await global.browser.disconnect();
  global.browser = undefined;
};

const getPage = (global: StrictGlobal) => {
  if (!global.page) {
    throw new Error("Cannot access page before launching browser.");
  }
  return global.page;
};

const openPage = async (global: StrictGlobal) => {
  if (global.page) {
    throw new Error("Cannot open page before closing previous page.");
  }
  const page = await getContext(global).newPage();
  if (global.puppeteerConfig.exitOnPageError) {
    page.on("pageerror", handlePageError);
  }
  global.page = page;
};

const closePage = async (global: StrictGlobal) => {
  if (!global.page) return;
  if (global.puppeteerConfig.exitOnPageError) {
    global.page.off("pageerror", handlePageError);
  }
  await global.page.close({
    runBeforeUnload: Boolean(global.puppeteerConfig.runBeforeUnloadOnClose),
  });
  global.page = undefined;
};

const createContext = async (global: StrictGlobal) => {
  if (global.context) {
    throw new Error("Cannot create context before closing previous context.");
  }
  const configBrowserContext =
    global.puppeteerConfig.browserContext ?? "default";
  const browser = getBrowser(global);
  switch (configBrowserContext) {
    case "default":
      global.context = browser.defaultBrowserContext();
      break;
    case "incognito":
      global.context = await browser.createIncognitoBrowserContext();
      break;
    default:
      throw new Error(
        `browserContext should be either 'incognito' or 'default'. Received '${configBrowserContext}'`,
      );
  }
};

const closeContext = async (global: StrictGlobal) => {
  if (!global.context) return;
  if (global.context.isIncognito()) {
    await global.context.close();
  }
  global.context = undefined;
};

const initAll = async (global: StrictGlobal) => {
  await connectBrowser(global);
  await createContext(global);
  await openPage(global);
};

const closeAll = async (global: StrictGlobal) => {
  await closePage(global);
  await closeContext(global);
  await disconnectBrowser(global);
};

export class PuppeteerEnvironment extends NodeEnvironment {
  declare global: StrictGlobal & NodeEnvironment["global"];

  constructor(config: JestEnvironmentConfig, _context: EnvironmentContext) {
    super(config, _context);

    this.global.puppeteerConfig = {};
    this.global.jestPuppeteer = {
      debug: async () => {
        // Set timeout to 4 days
        this.setTimeout(345600000);
        // Run a debugger (in case Puppeteer has been launched with `{ devtools: true }`)
        await getPage(this.global).evaluate(() => {
          debugger;
        });
        return blockStdin();
      },
      resetPage: async () => {
        await closePage(this.global);
        await openPage(this.global);
      },
      resetBrowser: async () => {
        await closeAll(this.global);
        await initAll(this.global);
      },
    };
  }

  // Jest is not available here, so we have to reverse engineer
  // the setTimeout function, see https://github.com/facebook/jest/blob/ffe2352c781703b427fab10777043fb76d0d4267/packages/jest-runtime/src/index.ts#L2331
  setTimeout(timeout: number) {
    this.global[testTimeoutSymbol] = timeout;
  }

  async setup(): Promise<void> {
    this.global.puppeteerConfig = await readConfig();
    await initAll(this.global);
  }

  async teardown() {
    await closeAll(this.global);
  }
}
