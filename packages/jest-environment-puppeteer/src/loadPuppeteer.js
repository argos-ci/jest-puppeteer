import readConfig from './readConfig'

async function loadPuppeteer() {
  const config = await readConfig()
  const packageName = config.puppeteerCore ? 'puppeteer-core' : 'puppeteer'

  let puppeteer
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    puppeteer = require(packageName)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      `
      ${packageName} isn't installed.
      Try \`$ npm i --save-dev ${packageName}\`
      `,
      e,
    )
  }

  return puppeteer
}

export default loadPuppeteer
