import type { JestPuppeteerGlobal } from "jest-environment-puppeteer";

declare global {
  // @ts-ignore
  var browser: JestPuppeteerGlobal["browser"];
  // @ts-ignore
  var page: JestPuppeteerGlobal["page"];
  // @ts-ignore
  var context: JestPuppeteerGlobal["context"];
  // @ts-ignore
  var puppeteerConfig: JestPuppeteerGlobal["puppeteerConfig"];
  // @ts-ignore
  var jestPuppeteer: JestPuppeteerGlobal["jestPuppeteer"];
}

module.exports = {
  globalSetup: require.resolve("jest-environment-puppeteer/setup"),
  globalTeardown: require.resolve("jest-environment-puppeteer/teardown"),
  testEnvironment: require.resolve("jest-environment-puppeteer"),
  setupFilesAfterEnv: [require.resolve("expect-puppeteer")],
};
