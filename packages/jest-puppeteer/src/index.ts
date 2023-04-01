/* eslint-disable no-var */
import type { JestPuppeteerGlobal } from "jest-environment-puppeteer";

declare global {
  var browser: JestPuppeteerGlobal["browser"];
  var page: JestPuppeteerGlobal["page"];
  var context: JestPuppeteerGlobal["context"];
  var puppeteerConfig: JestPuppeteerGlobal["puppeteerConfig"];
  var jestPuppeteer: JestPuppeteerGlobal["jestPuppeteer"];
}

export = {
  globalSetup: require.resolve("jest-environment-puppeteer/setup"),
  globalTeardown: require.resolve("jest-environment-puppeteer/teardown"),
  testEnvironment: require.resolve("jest-environment-puppeteer"),
  setupFilesAfterEnv: [require.resolve("expect-puppeteer")],
};
