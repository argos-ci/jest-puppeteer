import path from 'path'
import cwd from 'cwd'

export async function loadPackageJSONFile() {
  const packageJsonPath = path.resolve(cwd(), 'package.json')

  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(packageJsonPath)
  } catch (e) {
    throw new Error(`Error: Error reading package.json file`)
  }
}

export async function loadCustomConfig() {
  const configPath =
    process.env.JEST_PUPPETEER_CONFIG || 'jest-puppeteer.config.js'
  const absConfigPath = path.resolve(cwd(), configPath)
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(absConfigPath)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return false
    }
    throw err
  }
}
