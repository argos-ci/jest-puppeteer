/* eslint-disable no-console */
import fs from 'fs'
import {
  setup as setupServer,
  teardown as teardownServer,
  ERROR_TIMEOUT,
  ERROR_NO_COMMAND,
} from 'jest-dev-server'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import puppeteer from 'puppeteer'
import chalk from 'chalk'
import readConfig from './readConfig'
import { DIR, WS_ENDPOINT_PATH } from './constants'

let browser

export async function setup() {
  const config = await readConfig()
  browser = await puppeteer.launch(config.launch)
  mkdirp.sync(DIR)
  fs.writeFileSync(WS_ENDPOINT_PATH, browser.wsEndpoint())

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

export async function teardown() {
  await teardownServer()
  await browser.close()
  rimraf.sync(DIR)
}
