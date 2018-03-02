import fs from 'fs'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import puppeteer from 'puppeteer'
import { DIR, WS_ENDPOINT_PATH } from './constants'

let browser

export async function setup() {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: process.env.HEADLESS !== 'false',
  })
  mkdirp.sync(DIR)
  fs.writeFileSync(WS_ENDPOINT_PATH, browser.wsEndpoint())
}

export async function teardown() {
  await browser.close()
  rimraf.sync(DIR)
}
