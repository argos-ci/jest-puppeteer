# Jest Puppeteer

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Run your tests using Jest & Puppeteer 🎪✨

```
npm install jest-puppeteer-preset puppeteer
```

## Usage

Update your Jest configuration:

```json
{
  "preset": "jest-puppeteer-preset"
}
```

Use Puppeteer in your tests:

```js
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    await expectPage().toMatch('google')
  })
})
```

## Recipes

### Writing tests using Puppeteer

Writing integration test can be done using [Puppeteer API](<(https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)>) but it can be complicated and hard because API is not designed for testing.

To make it simpler, an `expectPage()` is automatically installed and available, it provides a lot of convenient methods, all documented in [expect-puppeteer API](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api).

Some examples:

#### Find a text in the page

```js
// Assert that current page contains 'Text in the page'
await expectPage().toMatch('Text in the page')
```

#### Click a button

```js
// Assert that a button containing text "Home" will be clicked
await expectPage().toClick('button', { text: 'Home' })
```

#### Fill a form

```js
// Assert that a form will be filled
await expectPage().toFillForm('form[name="myForm"]', {
  firstName: 'James',
  lastName: 'Bond',
})
```

### Start a server

Jest Puppeteer integrates a functionality to run start a server when your test suite is started. It automatically close the server when tests are done.

To use it, specify a server section in your `jest-puppeteer.config.js`.

```js
// jest-puppeteer.config.js
module.exports = {
  server: {
    command: 'node server.js',
    port: 4444,
  },
}
```

### Configure Puppeteer

Jest Puppeteer automatically detect the best config to start Puppeteer but sometimes you may need to specify custom options. [All Puppeteer launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) can be specified in `jest-puppeteer.config.js` at the root of the project. Since it is JavaScript, you can use all stuff you need, including environment.

```js
// jest-puppeteer.config.js
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
}
```

### Configure ESLint

Jest Puppeteer exposes two new globals: `browser`, `page` and `expectPage`. If you want to avoid errors, you can add them to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    expectPage: true,
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

### `global.expectPage`

Helper to make Puppeteer assertions, [see documentation](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api).

```js
await expectPage().toMatch('A text in the page')
// ...
```

### `jest-puppeteer.config.js`

You can specify a `jest-puppeteer.config.js` at the root of the project.

* `launch` <[object]> [All Puppeteer launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) can be specified in `jest-puppeteer.config.js` at the root of the project. Since it is JavaScript, you can use all stuff you need, including environment.
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
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 'Array'
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type 'Boolean'
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function 'Function'
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type 'Number'
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object 'Object'
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 'Promise'
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type 'String'
[error]: https://nodejs.org/api/errors.html#errors_class_error 'Error'
