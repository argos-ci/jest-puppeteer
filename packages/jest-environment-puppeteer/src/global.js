import stream from 'stream'
import fs from 'fs'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import puppeteer from 'puppeteer'
import spawnd from 'spawnd'
import cwd from 'cwd'
import waitPort from 'wait-port'
import chalk from 'chalk'
import readConfig from './readConfig'
import { DIR, WS_ENDPOINT_PATH } from './constants'

let browser
let server

const serverLogPrefixer = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chalk.magentaBright(`[Jest Puppeteer server] ${chunk.toString()}`),
    )
    callback()
  },
})

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

    if (config.server.debug) {
      console.log(chalk.magentaBright('\nJest Puppeteer server output:'))
      server.stdout.pipe(serverLogPrefixer).pipe(process.stdout)
    }

    if (config.server.port) {
      const launchTimeout = config.server.launchTimeout || 5000
      const timeout = setTimeout(() => {
        console.error(
          chalk.red(
            `\nJest Puppeteer Error: Server has taken more than ${launchTimeout}ms to start.`,
          ),
        )
        console.error(
          chalk.blue(
            `You can set "server.launchTimeout" in jest-puppeteer.config.js`,
          ),
        )
        process.exit(1)
      }, launchTimeout)
      await waitPort({
        port: config.server.port,
        output: 'silent',
      })
      clearTimeout(timeout)
    }
  }
}

export async function teardown() {
  if (server) await server.destroy()
  await browser.close()
  rimraf.sync(DIR)
}
