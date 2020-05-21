/* eslint import/no-extraneous-dependencies:off */
const puppeteer = require('puppeteer')
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)

  registerCustomQuery()
}

// Create a simple custom query handler to ensure `toMatchElement` supports them
// https://github.com/puppeteer/puppeteer/blob/master/src/QueryHandler.ts
function registerCustomQuery() {
  const name = '__experimental_registerCustomQueryHandler'
  const register = puppeteer[name]

  if (typeof register !== 'function') {
    throw new Error(`Puppeteer is missing query handler registration.

      Expected "${name}" function
    `)
  }

  register('hasText', function hasText(element, text) {
    const result = element.querySelectorAll(`*:not(:empty)`)

    return Array.from(result).filter(el => el.textContent.trim() === text)
  })
}
