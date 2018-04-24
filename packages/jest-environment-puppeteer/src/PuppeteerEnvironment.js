import fs from 'fs'
import NodeEnvironment from 'jest-environment-node'
import puppeteer from 'puppeteer'
import readConfig from './readConfig'
import { WS_ENDPOINT_PATH } from './constants'

const handleError = error => {
  process.emit('uncaughtException', error)
}

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    const config = await readConfig()
    this.global.puppeteerConfig = config

    const wsEndpoint = fs.readFileSync(WS_ENDPOINT_PATH, 'utf8')
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }
    this.global.browser = await puppeteer.connect({
      slowMo:
        config && config.launch && config.launch.slowMo
          ? config.launch.slowMo
          : undefined,
      ignoreHTTPSErrors:
        config && config.launch && config.launch.ignoreHTTPSErrors
          ? config.launch.ignoreHTTPSErrors
          : undefined,
      browserWSEndpoint: wsEndpoint,
    })
    this.global.page = await this.global.browser.newPage()
    if (config && config.exitOnPageError) {
      this.global.page.addListener('pageerror', handleError)
    }
  }

  async teardown() {
    this.global.page.removeListener('pageerror', handleError)
    await this.global.page.close()
  }
}

export default PuppeteerEnvironment
