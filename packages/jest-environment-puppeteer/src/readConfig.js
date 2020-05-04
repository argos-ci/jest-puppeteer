import merge from 'merge-deep'
import { loadPackageJSONFile, loadCustomConfig } from './util'

const PACKAGE_JSON_KEY = 'jestPuppeteerConfig'

const DEFAULT_CONFIG = {
  launch: {},
  browser: 'chromium',
  browserContext: 'default',
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
  const packageJsonConfig = (await loadPackageJSONFile())[PACKAGE_JSON_KEY]
  const customConfigFile = await loadCustomConfig()
  const customConfig = customConfigFile || packageJsonConfig

  if (hasCustomConfigPath && !customConfigFile) {
    throw new Error(
      `Error: Can't resolve configuration.\nProvided path to resolve a config file path: ${configPath}\nOr "${PACKAGE_JSON_KEY}" in your package.json file.`,
    )
  }

  if (!hasCustomConfigPath && !customConfig) {
    return defaultConfig
  }

  return merge({}, defaultConfig, customConfig)
}

export function getPuppeteer(config) {
  switch (config.browser.toLowerCase()) {
    /* eslint-disable global-require, import/no-dynamic-require, import/no-extraneous-dependencies, import/no-unresolved */
    case 'chromium':
      try {
        return require('puppeteer')
      } catch (e) {
        return require('puppeteer-core')
      }
    case 'firefox':
      return require('puppeteer-firefox')
    /* eslint-enable */
    default:
      throw new Error(
        `Error: "browser" config option is given an unsupported value: ${browser}`,
      )
  }
}
