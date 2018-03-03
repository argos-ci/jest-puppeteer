# Jest Puppeteer

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
    await mainPage.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    const text = await mainPage.evaluate(() => document.body.textContent)
    expect(text).toContain('google')
  })
})
```

## Recipes

### Writing tests using Puppeteer

To write your integration tests using Puppeteer you can find all available methods in [Puppeteer documentation](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md).

### Configure Puppeteer

Jest Puppeteer automatically detect the best config to start Puppeteer but sometimes you may need to specify custom options.

[All Puppeteer launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) can be specified in `jest-puppeteer.config.js` at the root of the project. Since it is JavaScript, you can use all stuff you need, including environment.

```js
// jest-puppeteer.config.js
module.exports = {
  dumpio: true,
  headless: process.env.HEADLESS !== 'false',
}
```

### Configure ESLint

Jest Environment Puppeteer exposes two new globals: `browser` and `page`. If you want to avoid errors, you can add them to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
  },
}
```

### Extend PuppeteerEnvironment

Sometimes you want to use your own environment, to do that you can extend `PuppeteerEnvironment`.

```js
const PuppeteerEnvironment = require('jest-environment-puppeteer')

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup()
    // Your setup
  }

  async teardown() {
    // Your teardown
    await super.teardown()
  }
}

module.exports = CustomEnvironment
```

### Access `globalSetup` or `globalTeardown`

It is possible to access `globalSetup` or `globalTeardown` in your scripts.

```js
const {
  setup: setupPuppeteer,
  teardown: teardownPuppeteer,
} = require('jest-environment-puppeteer')

async function setup() {
  await setupPuppeteer()
  // ...
}

async function teardown() {
  // ...
  await teardownPuppeteer()
}
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

## Inspiration

Thanks to Fumihiro Xue for his great [Jest example](https://github.com/xfumihiro/jest-puppeteer-example).

## License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/jest-environment-puppeteer.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/jest-environment-puppeteer
[version-badge]: https://img.shields.io/npm/v/jest-environment-puppeteer.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-environment-puppeteer
[license-badge]: https://img.shields.io/npm/l/jest-environment-puppeteer.svg?style=flat-square
[license]: https://github.com/smooth-code/jest-environment-puppeteer/blob/master/LICENSE
