// eslint-disable-next-line
import NodeEnvironment from 'jest-environment-node'
import chalk from 'chalk'
import readConfig from './readConfig'
import loadPuppeteer from './loadPuppeteer'

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

    const wsEndpoint = process.env.PUPPETEER_WS_ENDPOINT
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }
    const puppeteer = await loadPuppeteer()
    this.global.browser = await puppeteer.connect({
      ...config.connect,
      ...config.launch,
      browserWSEndpoint: wsEndpoint,
    })

    if (config.browserContext === 'incognito') {
      // Using this, pages will be created in a pristine context.
      this.global.context = await this.global.browser.createIncognitoBrowserContext()
    } else if (config.browserContext === 'default' || !config.browserContext) {
      /**
       * Since this is a new browser, browserContexts() will return only one instance
       * https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#browserbrowsercontexts
       */
      this.global.context = await this.global.browser.browserContexts()[0]
    } else {
      throw new Error(
        `browserContext should be either 'incognito' or 'default'. Received '${
          config.browserContext
        }'`,
      )
    }

    this.global.page = await this.global.context.newPage()
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
    const config = await readConfig()
    this.global.page.removeListener('pageerror', handleError)

    if (config.browserContext === 'incognito') {
      await this.global.context.close()
    } else {
      await this.global.page.close()
    }
  }
}

export default PuppeteerEnvironment
