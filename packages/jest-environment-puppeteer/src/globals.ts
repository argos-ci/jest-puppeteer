import type { JestPuppeteerConfig } from "./config";
import type { Page, BrowserContext, Browser } from "puppeteer";

export type JestPuppeteer = {
  debug: () => Promise<void>;
  resetPage: () => Promise<void>;
  resetBrowser: () => Promise<void>;
};

export type JestPuppeteerGlobal = {
  browser?: Browser | undefined;
  page?: Page | undefined;
  context?: BrowserContext | undefined;
  puppeteerConfig: JestPuppeteerConfig;
  jestPuppeteer: JestPuppeteer;
};

type Global = typeof globalThis & {
  browser: Browser;
  page: Page;
  context: BrowserContext;
  puppeteerConfig: JestPuppeteerConfig;
  jestPuppeteer: JestPuppeteer;
};

declare global {
  const browser: Browser;
  const page: Page;
  const context: BrowserContext;
  const puppeteerConfig: JestPuppeteerConfig;
  const jestPuppeteer: JestPuppeteer;
}

const global = globalThis as Global;

export const browser = global.browser;
export const page = global.page;
export const context = global.context;
export const puppeteerConfig: JestPuppeteerConfig = global.puppeteerConfig;
export const jestPuppeteer = global.jestPuppeteer;
