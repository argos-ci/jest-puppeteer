import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import cwd from 'cwd'
import merge from 'merge-deep'

const exists = promisify(fs.exists)

const DEFAULT_CONFIG = {
  launch: {},
  browser: 'chromium',
  browserContext: 'default',
  keepTabOpen: 'false',
  exitOnPageError: true,
}
const DEFAULT_CONFIG_CI = merge(DEFAULT_CONFIG, {
  launch: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
    ],
  },
})

export async function readConfig() {
  const defaultConfig =
    process.env.CI === 'true' ? DEFAULT_CONFIG_CI : DEFAULT_CONFIG

  const hasCustomConfigPath = !!process.env.JEST_PUPPETEER_CONFIG
  const configPath =
    process.env.JEST_PUPPETEER_CONFIG || 'jest-puppeteer.config.js'
  const absConfigPath = path.resolve(cwd(), configPath)
  const configExists = await exists(absConfigPath)

  if (hasCustomConfigPath && !configExists) {
    throw new Error(
      `Error: Can't find a root directory while resolving a config file path.\nProvided path to resolve: ${configPath}`,
    )
  }

  if (!hasCustomConfigPath && !configExists) {
    return defaultConfig
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const localConfig = await require(absConfigPath)
  return merge({}, defaultConfig, localConfig)
}

export function getPuppeteer(config) {
  switch (config.browser.toLowerCase()) {
    case 'chromium':
      // eslint-disable-next-line global-require, import/no-dynamic-require, import/no-extraneous-dependencies
      return require('puppeteer')
    case 'firefox':
      // eslint-disable-next-line global-require, import/no-dynamic-require, import/no-extraneous-dependencies
      return require('puppeteer-firefox')
    default:
      throw new Error(
        `Error: "browser" config option is given an unsupported value: ${browser}`,
      )
  }
}
