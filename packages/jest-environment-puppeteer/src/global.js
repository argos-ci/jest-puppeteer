import fs from 'fs'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import puppeteer from 'puppeteer'
import readConfig from './readConfig'
import { DIR, WS_ENDPOINT_PATH } from './constants'

let browser

export async function setup() {
  const config = await readConfig()
  browser = await puppeteer.launch(config)
  mkdirp.sync(DIR)
  fs.writeFileSync(WS_ENDPOINT_PATH, browser.wsEndpoint())
}

export async function teardown() {
  await browser.close()
  rimraf.sync(DIR)
}
