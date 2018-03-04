const waitPort = require('wait-port')
const {
  setup: setupPuppeteer,
} = require('../packages/jest-environment-puppeteer')
const spawnd = require('../packages/spawnd')

module.exports = async function setup() {
  await setupPuppeteer()
  global.app = spawnd('node server.js', {
    cwd: __dirname,
    env: process.env,
    shell: true,
  })
  await waitPort({ port: 4444, output: 'silent' })
}
