# jest-environment-puppeteer

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Run your tests using Jest & Puppeteer 🎪✨

```
npm install jest-environment-puppeteer puppeteer
```

## Usage

Update your Jest configuration:

```json
{
  "globalSetup": "jest-environment-puppeteer/setup",
  "globalTeardown": "jest-environment-puppeteer/teardown",
  "testEnvironment": "jest-environment-puppeteer"
}
```

Use Puppeteer in your tests:

```js
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    const text = await page.evaluate(() => document.body.textContent)
    expect(text).toContain('google')
  })
})
```

## API

### `global.browser`

Give access to the [Puppeteer Browser](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-browser).

```js
it('should open a new page', async () => {
  const page = await browser.newPage()
  await page.goto('https://google.com')
})
```

### `global.page`

Give access to a [Puppeteer Page](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page) opened at start (you will use it most of time).

```js
it('should fill an input', async () => {
  await page.type('#myinput', 'Hello')
})
```

### `jest-puppeteer.config.js`

You can specify a `jest-puppeteer.config.js` at the root of the project or define a custom path using `JEST_PUPPETEER_CONFIG` environment variable.

* `launch` <[object]> [All Puppeteer launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) can be specified in config. Since it is JavaScript, you can use all stuff you need, including environment.
* `exitOnPageError` <[boolean]> Exits page on any global error message thrown. Defaults to `true`.
* `server` <[Object]> Server options
  * `command` <[string]> Command to start server
  * `port` <[number]> If specified, it will wait port to be listened
  * `options` <[Object]> Optional options for [spawnd](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/spawnd/README.md)

```js
// jest-puppeteer.config.js
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'node server.js',
    port: 4444,
  },
}
```

## Inspiration

Thanks to Fumihiro Xue for his great [Jest example](https://github.com/xfumihiro/jest-puppeteer-example).

## License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/jest-puppeteer.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/jest-puppeteer
[version-badge]: https://img.shields.io/npm/v/jest-environment-puppeteer.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-environment-puppeteer
[license-badge]: https://img.shields.io/npm/l/jest-environment-puppeteer.svg?style=flat-square
[license]: https://github.com/smooth-code/jest-puppeteer/blob/master/LICENSE
