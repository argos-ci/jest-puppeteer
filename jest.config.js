module.exports = {
  globalSetup: './jestConfig/globalSetup',
  globalTeardown: './jestConfig/globalTeardown',
  testEnvironment: './packages/jest-environment-puppeteer',
  setupTestFrameworkScriptFile: './packages/expect-puppeteer',
}
