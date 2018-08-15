import fs from 'fs'
// eslint-disable-next-line
import NodeEnvironment from 'jest-environment-node'
import puppeteer from 'puppeteer'
import chalk from 'chalk'
import readConfig from './readConfig'
import { WS_ENDPOINT_PATH } from './constants'

const handleError = error => {
  process.emit('uncaughtException', error)
}

const KEYS = {
  CONTROL_C: '\u0003',
  CONTROL_D: '\u0004',
  ENTER: '\r',
}

class PuppeteerEnvironment extends NodeEnvironment {
  // Jest is not available here, so we have to reverse engineer
  // the setTimeout function, see https://github.com/facebook/jest/blob/v23.1.0/packages/jest-runtime/src/index.js#L823
  setTimeout(timeout) {
    if (this.global.jasmine) {
      // eslint-disable-next-line no-underscore-dangle
      this.global.jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout
    } else {
      this.global[Symbol.for('TEST_TIMEOUT_SYMBOL')] = timeout
    }
  }

  async setup() {
    const config = await readConfig()
    this.global.puppeteerConfig = config

    const wsEndpoint = fs.readFileSync(WS_ENDPOINT_PATH, 'utf8')
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }
    this.global.browser = await puppeteer.connect({
      ...config.launch,
      browserWSEndpoint: wsEndpoint,
    })
    this.global.page = await this.global.browser.newPage()
    if (config && config.exitOnPageError) {
      this.global.page.addListener('pageerror', handleError)
    }

    this.global.jestPuppeteer = {
      debug: async () => {
        // eslint-disable-next-line no-eval
        // Set timeout to 4 days
        this.setTimeout(345600)
        // Run a debugger (in case Puppeteer has been launched with `{ devtools: true }`)
        await this.global.page.evaluate(() => {
          // eslint-disable-next-line no-debugger
          debugger
        })
        // eslint-disable-next-line no-console
        console.log(
          chalk.blue('\n\n🕵️‍  Code is paused, press enter to resume'),
        )
        // Run an infinite promise
        return new Promise(resolve => {
          const { stdin } = process
          const onKeyPress = key => {
            if (
              key === KEYS.CONTROL_C ||
              key === KEYS.CONTROL_D ||
              key === KEYS.ENTER
            ) {
              stdin.removeListener('data', onKeyPress)
              if (!listening) {
                stdin.setRawMode(false)
                stdin.pause()
              }
              resolve()
            }
          }
          const listening = stdin.listenerCount('data') > 0
          if (!listening) {
            stdin.setRawMode(true)
            stdin.resume()
            stdin.setEncoding('utf8')
          }
          stdin.on('data', onKeyPress)
        })
      },
    }
  }

  async teardown() {
    this.global.page.removeListener('pageerror', handleError)
    await this.global.page.close()
  }
}

export default PuppeteerEnvironment
