# Jest Puppeteer

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![Backers on Open Collective](https://opencollective.com/jest-puppeteer/backers/badge.svg)](#backers)
 [![Sponsors on Open Collective](https://opencollective.com/jest-puppeteer/sponsors/badge.svg)](#sponsors) 

Run your tests using Jest & Puppeteer 🎪✨

```
npm install --save-dev jest-puppeteer puppeteer jest
```

> Requires Jest v22+
> TypeScript users should additionally install `@types/puppeteer`, `@types/jest-environment-puppeteer` and `@types/expect-puppeteer`

## Usage

Update your Jest configuration:

```json
{
  "preset": "jest-puppeteer"
}
```

Use Puppeteer in your tests:

```js
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
})
```

## Recipes

### Writing tests using Puppeteer

Writing integration test can be done using [Puppeteer API](<(https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)>) but it can be complicated and hard because API is not designed for testing.

To make it simpler, [expect-puppeteer API](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api) add some specific matchers if you make expectation on a [Puppeteer Page](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page).

Some examples:

#### Find a text in the page

```js
// Assert that current page contains 'Text in the page'
await expect(page).toMatch('Text in the page')
```

#### Click a button

```js
// Assert that a button containing text "Home" will be clicked
await expect(page).toClick('button', { text: 'Home' })
```

#### Fill a form

```js
// Assert that a form will be filled
await expect(page).toFillForm('form[name="myForm"]', {
  firstName: 'James',
  lastName: 'Bond',
})
```

### Put in debug mode

Debugging tests can be hard sometimes and it is very useful to be able to pause tests in order to inspect the browser. Jest Puppeteer exposes a method `jestPuppeteer.debug()` that suspends test execution and gives you opportunity to see what's going on in the browser.

```js
await jestPuppeteer.debug()
```

### Start a server

Jest Puppeteer integrates a functionality to start a server when running your test suite. It automatically closes the server when tests are done.

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

Other options are documented in [jest-dev-server](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server).

### Configure Puppeteer

Jest Puppeteer automatically detect the best config to start Puppeteer but sometimes you may need to specify custom options. All Puppeteer [launch](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) or [connect](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerconnectoptions) options can be specified in `jest-puppeteer.config.js` at the root of the project. Since it is JavaScript, you can use all stuff you need, including environment.

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

Jest Puppeteer exposes two new globals: `browser`, `page`. If you want to avoid errors, you can add them to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    jestPuppeteer: true,
  },
}
```

### Extend `PuppeteerEnvironment`

Sometimes you want to use your own environment, to do that you can extend `PuppeteerEnvironment`.

First, create your own js file for custom environment.

```js
// custom-environment.js
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

Then, assigning your js file path to the [`testEnvironment`](https://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string) property in your Jest configuration.

```js
{
  // ...
  "testEnvironment": "./custom-environment.js"
}
```

Now your custom `setup` and `teardown` will be triggered before and after each test suites.

### Create your own `globalSetup` and `globalTeardown`

It is possible to create your own [`globalSetup`](https://facebook.github.io/jest/docs/en/configuration.html#globalsetup-string) and [`globalTeardown`](https://facebook.github.io/jest/docs/en/configuration.html#globalteardown-string).

For this use case, `jest-environment-puppeteer` exposes two methods: `setup` and `teardown`, so that you can wrap them with your own global setup and global teardown methods as the following example:

```js
// global-setup.js
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalSetup() {
  await setupPuppeteer()
  // Your global setup
}
```

```js
// global-teardown.js
const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalTeardown() {
  // Your global teardown
  await teardownPuppeteer()
}
```

Then assigning your js file paths to the [`globalSetup`](https://facebook.github.io/jest/docs/en/configuration.html#globalsetup-string) and [`globalTeardown`](https://facebook.github.io/jest/docs/en/configuration.html#globalteardown-string) property in your Jest configuration.

```js
{
  // ...
  "globalSetup": "./global-setup.js",
  "globalTeardown": "./global-teardown.js"
}
```

Now your custom `globalSetup` and `globalTeardown` will be triggered once before and after all test suites.

### Create React App

You can find an [example of create-react-app setup in this repository](https://github.com/smooth-code/jest-puppeteer/tree/master/examples/create-react-app).

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

### `global.expect(page)`

Helper to make Puppeteer assertions, [see documentation](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api).

```js
await expect(page).toMatch('A text in the page')
// ...
```

### `global.jestPuppeteer.debug()`

Put test in debug mode.

- Jest is suspended (no timeout)
- A `debugger` instruction to Chromium, if Puppeteer has been launched with `{ devtools: true }` it will stop

```js
it('should put test in debug mode', async () => {
  await jestPuppeteer.debug()
})
```

### `jest-puppeteer.config.js`

You can specify a `jest-puppeteer.config.js` at the root of the project or define a custom path using `JEST_PUPPETEER_CONFIG` environment variable.

- `launch` <[object]> [All Puppeteer launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) can be specified in config. Since it is JavaScript, you can use all stuff you need, including environment.
- `connect` <[object]> [All Puppeteer connect options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerconnectoptions) can be specified in config. This is an alternative to `launch` config, allowing you to connect to an already running instance of Chrome.
- `server` <[Object]> Server options allowed by [jest-dev-server](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server)

#### Example 1

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

#### Example 2

This example uses an already running instance of Chrome by passing the active web socket endpoint to `connect`. This is useful, for example, when you want to connect to Chrome running in the cloud.

```js
// jest-puppeteer.config.js
const wsEndpoint = fs.readFileSync(endpointPath, 'utf8')

module.exports = {
  connect: {
    browserWSEndpoint: wsEndpoint,
  },
  server: {
    command: 'node server.js',
    port: 4444,
  },
}
```

## Inspiration

Thanks to Fumihiro Xue for his great [Jest example](https://github.com/xfumihiro/jest-puppeteer-example).

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/undefined/undefinedgraphs/contributors"><img src="https://opencollective.com/jest-puppeteer/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/jest-puppeteer#backer)]

<a href="https://opencollective.com/jest-puppeteer#backers" target="_blank"><img src="https://opencollective.com/jest-puppeteer/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/jest-puppeteer#sponsor)]

<a href="https://opencollective.com/jest-puppeteer/sponsor/0/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/1/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/2/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/3/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/4/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/5/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/6/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/7/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/8/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/jest-puppeteer/sponsor/9/website" target="_blank"><img src="https://opencollective.com/jest-puppeteer/sponsor/9/avatar.svg"></a>



## License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/jest-puppeteer.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/jest-puppeteer
[version-badge]: https://img.shields.io/npm/v/jest-puppeteer.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-puppeteer
[license-badge]: https://img.shields.io/npm/l/jest-puppeteer.svg?style=flat-square
[license]: https://github.com/smooth-code/jest-puppeteer/blob/master/LICENSE
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 'Array'
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type 'Boolean'
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function 'Function'
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type 'Number'
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object 'Object'
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 'Promise'
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type 'String'
[error]: https://nodejs.org/api/errors.html#errors_class_error 'Error'
