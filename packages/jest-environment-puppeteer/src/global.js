/* eslint-disable no-console */
import {
  setup as setupServer,
  teardown as teardownServer,
  ERROR_TIMEOUT,
  ERROR_NO_COMMAND,
} from 'jest-dev-server'
import chalk from 'chalk'
import { readConfig, getPuppeteer } from './readConfig'

const browsers = []

let didAlreadyRunInWatchMode = false

async function openBrowser(puppeteer, config) {
  if (config.connect) {
    return await puppeteer.connect(config.connect)
  }
  return await puppeteer.launch(config.launch)
}

export async function setup(jestConfig = {}) {
  const config = await readConfig()
  const puppeteer = getPuppeteer()
  const wsEndpoints = []
  const browsersCount =
    config.browserPerWorker && !config.connect ? jestConfig.maxWorkers : 1
  process.env.BROWSERS_COUNT = browsersCount

  for (let i = 0; i < browsersCount; i++) {
    const browser = await openBrowser(puppeteer, config)
    browsers.push(browser)
    wsEndpoints.push(browser.wsEndpoint())
  }
  process.env.PUPPETEER_WS_ENDPOINTS = JSON.stringify(wsEndpoints)

  // If we are in watch mode, - only setupServer() once.
  if (jestConfig.watch || jestConfig.watchAll) {
    if (didAlreadyRunInWatchMode) return
    didAlreadyRunInWatchMode = true
  }

  if (config.server) {
    try {
      await setupServer(config.server)
    } catch (error) {
      if (error.code === ERROR_TIMEOUT) {
        console.log('')
        console.error(chalk.red(error.message))
        console.error(
          chalk.blue(
            `\n☝️ You can set "server.launchTimeout" in jest-puppeteer.config.js`,
          ),
        )
        process.exit(1)
      }
      if (error.code === ERROR_NO_COMMAND) {
        console.log('')
        console.error(chalk.red(error.message))
        console.error(
          chalk.blue(
            `\n☝️ You must set "server.command" in jest-puppeteer.config.js`,
          ),
        )
        process.exit(1)
      }
      throw error
    }
  }
}

export async function teardown(jestConfig = {}) {
  const config = await readConfig()
  for (const browser of browsers) {
    if (config.connect) {
      await browser.disconnect()
    } else {
      await browser.close()
    }
  }

  if (!jestConfig.watch && !jestConfig.watchAll) {
    await teardownServer()
  }
}
