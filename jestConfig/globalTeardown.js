const {
  teardown: teardownPuppeteer,
} = require('../packages/jest-environment-puppeteer')

module.exports = async function teardown() {
  await teardownPuppeteer()
  if (global.app) global.app.destroy()
}
