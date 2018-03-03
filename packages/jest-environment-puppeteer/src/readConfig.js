import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import cwd from 'cwd'

const exists = promisify(fs.exists)

const CONFIG_PATH = path.join(cwd(), 'jest-puppeteer.config.js')
const DEFAULT_CONFIG = {}
const DEFAULT_CONFIG_CI = {
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
}

async function readConfig() {
  const defaultConfig =
    process.env.CI === 'true' ? DEFAULT_CONFIG_CI : DEFAULT_CONFIG

  if (!await exists(CONFIG_PATH)) return defaultConfig

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const localConfig = require(CONFIG_PATH)
  return Object.assign({}, defaultConfig, localConfig)
}

export default readConfig
