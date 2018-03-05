import fs from 'fs'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import puppeteer from 'puppeteer'
import spawnd from 'spawnd'
import cwd from 'cwd'
import waitPort from 'wait-port'
import readConfig from './readConfig'
import { DIR, WS_ENDPOINT_PATH } from './constants'

let browser
let server

export async function setup() {
  const config = await readConfig()
  browser = await puppeteer.launch(config.launch)
  mkdirp.sync(DIR)
  fs.writeFileSync(WS_ENDPOINT_PATH, browser.wsEndpoint())

  if (config.server) {
    server = spawnd(config.server.command, {
      shell: true,
      env: process.env,
      cwd: cwd(),
      ...config.server.options,
    })

    if (config.server.port) {
      await waitPort({ port: config.server.port, output: 'silent' })
    }
  }
}

export async function teardown() {
  if (server) await server.destroy()
  await browser.close()
  rimraf.sync(DIR)
}
