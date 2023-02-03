module.exports = {
  globalSetup: require.resolve("jest-environment-puppeteer/setup"),
  globalTeardown: require.resolve("jest-environment-puppeteer/teardown"),
  testEnvironment: require.resolve("jest-environment-puppeteer"),
  setupFilesAfterEnv: [require.resolve("expect-puppeteer")],
};
