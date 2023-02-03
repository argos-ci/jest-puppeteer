<h1 align="center">
  <img src="https://raw.githubusercontent.com/smooth-code/jest-puppeteer/master/resources/jest-puppeteer-logo.png" alt="jest-puppeteer" title="jest-puppeteer" width="300">
</h1>
<p align="center" style="font-size: 1.2rem;">Run your tests using Jest & Puppeteer 🎪✨</p>

[![License](https://img.shields.io/npm/l/jest-puppeteer.svg)](https://github.com/smooth-code/jest-puppeteer/blob/master/LICENSE)
[![Donate](https://opencollective.com/jest-puppeteer/backers/badge.svg)](https://opencollective.com/jest-puppeteer/donate)
[![npm package](https://img.shields.io/npm/v/jest-puppeteer/latest.svg)](https://www.npmjs.com/package/jest-puppeteer)
[![npm downloads](https://img.shields.io/npm/dm/jest-puppeteer.svg)](https://www.npmjs.com/package/jest-puppeteer)
[![Build Status](https://github.com/smooth-code/jest-puppeteer/workflows/CI/badge.svg)](https://github.com/smooth-code/jest-puppeteer/actions)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependencies](https://img.shields.io/david/smooth-code/jest-puppeteer.svg?path=packages%2Fjest-puppeteer)](https://david-dm.org/smooth-code/jest-puppeteer?path=packages/jest-puppeteer)
[![DevDependencies](https://img.shields.io/david/dev/smooth-code/jest-puppeteer.svg)](https://david-dm.org/smooth-code/jest-puppeteer?type=dev)

```bash
# for jest 22~23
npm install --save-dev jest-puppeteer@3.9.0 puppeteer jest
# for jest 24+
npm install --save-dev jest-puppeteer puppeteer jest
```

> Requires Jest v22+

```bash
# TypeScript users should install following type packages
npm install --save-dev @types/puppeteer @types/jest-environment-puppeteer @types/expect-puppeteer
```

## Supporting jest-puppeteer

jest-puppeteer is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to the support of these awesome [backers](/BACKERS.md). If you'd like to join them, please consider:

- [Become a backer or sponsor on OpenCollective](https://opencollective.com/jest-puppeteer).

### Gold Sponsors

Gold Sponsors are those who have pledged \$100/month and more to jest-puppeteer.

[![gold-sponsors](https://opencollective.com/jest-puppeteer/tiers/gold-sponsors.svg?avatarHeight=120&width=600)](https://opencollective.com/jest-puppeteer/order/6045)

## Usage

Update your Jest configuration:

```json
{
  "preset": "jest-puppeteer"
}
```

**NOTE**: Be sure to remove any existing `testEnvironment` option from your Jest configuration. The `jest-puppeteer` preset needs to manage that option itself.

Use Puppeteer in your tests:

```js
import "expect-puppeteer";

describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch("google");
  });
});
```

If you are using `react-scripts`, you will need to pass the environment via command line:

```js
  "test": "react-scripts test --env=puppeteer",
```

or alternatively include the following comment at the top of each test file:

```js
/**
 * @jest-environment puppeteer
 */
```

### Running puppeteer in CI environments

Most continuous integration platforms limit the number of threads one can use. If you have more than one test suite running puppeteer chances are that your test will timeout. This is because jest will try to run puppeteer in parallel and the CI platform won't be able to handle all the parallel jobs in time. A fix to this is to run your test serially when in a CI environment. Users have discovered that [running test serially in such environments can render up to 50%](https://jestjs.io/docs/en/troubleshooting#tests-are-extremely-slow-on-docker-and-or-continuous-integration-ci-server) of performance gains.

This can be achieved through the CLI by running:

```sh
jest --runInBand
```

Alternatively, you can set jest to use as a max number of workers the amount that your CI environment supports:

```
jest --maxWorkers=2
```

## Recipes

### Writing tests using Puppeteer

Writing integration test can be done using [Puppeteer API](<(https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)>) but it can be complicated and hard because API is not designed for testing.

To make it simpler, [expect-puppeteer API](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api) add some specific matchers if you make expectation on a [Puppeteer Page](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page).

Some examples:

#### Find a text in the page

```js
// Assert that current page contains 'Text in the page'
await expect(page).toMatch("Text in the page");
```

#### Click a button

```js
// Assert that a button containing text "Home" will be clicked
await expect(page).toClick("button", { text: "Home" });
```

#### Fill a form

```js
// Assert that a form will be filled
await expect(page).toFillForm('form[name="myForm"]', {
  firstName: "James",
  lastName: "Bond",
});
```

### Put in debug mode

Debugging tests can be hard sometimes and it is very useful to be able to pause tests in order to inspect the browser. Jest Puppeteer exposes a method `jestPuppeteer.debug()` that suspends test execution and gives you opportunity to see what's going on in the browser.

```js
await jestPuppeteer.debug();
```

### Start a server

Jest Puppeteer integrates a functionality to start a server when running your test suite. It automatically closes the server when tests are done.

To use it, specify a server section in your `jest-puppeteer.config.js`.

```js
// jest-puppeteer.config.js
module.exports = {
  server: {
    command: "node server.js",
    port: 4444,
  },
};
```

Other options are documented in [jest-dev-server](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server).

### Configure Puppeteer

Jest Puppeteer automatically detects the best config to start Puppeteer but sometimes you may need to specify custom options. All Puppeteer [launch](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) or [connect](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerconnectoptions) options can be specified in `jest-puppeteer.config.js` at the root of the project. Since it is JavaScript, you can use all the stuff you need, including environment.

To run Puppeteer on Firefox, you can set the `launch.product` property to `firefox`. By default, the value is `chrome` which will use Puppeteer on Chromium.

The browser context can be also specified. By default, the browser context is shared (value of `default`). The `incognito` value is also available, in case you want more isolation between running instances. More information available in [jest-puppeteer-environment readme](https://github.com/smooth-code/jest-puppeteer/blob/master/packages/jest-environment-puppeteer/README.md)

Default config values:

```js
// jest-puppeteer.config.js
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== "false",
    product: "chrome",
  },
  browserContext: "default",
};
```

### Configure ESLint

Jest Puppeteer exposes three new globals: `browser`, `page`, `context`. If you want to avoid errors, you can add them to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
};
```

### Custom `setupTestFrameworkScriptFile` or `setupFilesAfterEnv`

If you use custom setup files, you'll need to include `expect-puppeteer` yourself in order to use the matchers it provides. Add the following to your setup file.

```js
// setup.js
require("expect-puppeteer");

// Your custom setup
// ...
```

```js
// jest.config.js
module.exports = {
  // ...
  setupTestFrameworkScriptFile: "./setup.js",
  // or
  setupFilesAfterEnv: ["./setup.js"],
};
```

You may want to consider using multiple projects in Jest since setting your own `setupFilesAfterEnv` and `globalSetup` can cause globals to be undefined.

```js
module.exports = {
  projects: [
    {
      displayName: "integration",
      preset: "jest-puppeteer",
      transform: {
        "\\.tsx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
          "jest-transform-stub",
      },
      moduleNameMapper: {
        "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
          "jest-transform-stub",
      },
      modulePathIgnorePatterns: [".next"],
      testMatch: [
        "<rootDir>/src/**/__integration__/**/*.test.ts",
        "<rootDir>/src/**/__integration__/**/*.test.tsx",
      ],
    },
    {
      displayName: "unit",
      transform: {
        "\\.tsx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
          "jest-transform-stub",
      },
      moduleNameMapper: {
        "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
          "jest-transform-stub",
      },
      globalSetup: "<rootDir>/setupEnv.ts",
      setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
      modulePathIgnorePatterns: [".next"],
      testMatch: [
        "<rootDir>/src/**/__tests_/**/*.test.ts",
        "<rootDir>/src/**/__tests__/**/*.test.tsx",
      ],
    },
  ],
};
```

### Extend `PuppeteerEnvironment`

Sometimes you want to use your own environment, to do that you can extend `PuppeteerEnvironment`.

First, create your own js file for custom environment.

```js
// custom-environment.js
const PuppeteerEnvironment = require("jest-environment-puppeteer");

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();
    // Your setup
  }

  async teardown() {
    // Your teardown
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
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
const { setup: setupPuppeteer } = require("jest-environment-puppeteer");

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig);
  // Your global setup
};
```

```js
// global-teardown.js
const { teardown: teardownPuppeteer } = require("jest-environment-puppeteer");

module.exports = async function globalTeardown(globalConfig) {
  // Your global teardown
  await teardownPuppeteer(globalConfig);
};
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
it("should open a new page", async () => {
  const page = await browser.newPage();
  await page.goto("https://google.com");
});
```

### `global.page`

Give access to a [Puppeteer Page](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page) opened at start (you will use it most of time).

```js
it("should fill an input", async () => {
  await page.type("#myinput", "Hello");
});
```

### `global.context`

Give access to a [browser context](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-browsercontext) that is instantiated when the browser is launched. You can control whether each test has its own isolated browser context using the `browserContext` option in your `jest-puppeteer.config.js`.

### `global.expect(page)`

Helper to make Puppeteer assertions, [see documentation](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api).

```js
await expect(page).toMatch("A text in the page");
// ...
```

### `global.jestPuppeteer.debug()`

Put test in debug mode.

- Jest is suspended (no timeout)
- A `debugger` instruction to Chromium, if Puppeteer has been launched with `{ devtools: true }` it will stop

```js
it("should put test in debug mode", async () => {
  await jestPuppeteer.debug();
});
```

### `global.jestPuppeteer.resetPage()`

Reset global.page

```js
beforeEach(async () => {
  await jestPuppeteer.resetPage();
});
```

### `global.jestPuppeteer.resetBrowser()`

Reset global.browser, global.context, and global.page

```js
beforeEach(async () => {
  await jestPuppeteer.resetBrowser();
});
```

### `jest-puppeteer.config.js`

You can specify a `jest-puppeteer.config.js` at the root of the project or define a custom path using `JEST_PUPPETEER_CONFIG` environment variable.

- `launch` <[object]> [All Puppeteer launch options](https://github.com/puppeteer/puppeteer/blob/main/docs/api/puppeteer.puppeteerlaunchoptions.md) can be specified in config. Since it is JavaScript, you can use all stuff you need, including environment.
- `connect` <[object]> [All Puppeteer connect options](https://github.com/puppeteer/puppeteer/blob/main/docs/api/puppeteer.connectoptions.md) can be specified in config. This is an alternative to `launch` config, allowing you to connect to an already running instance of Chrome.
- `server` <[Object]> Server options allowed by [jest-dev-server](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server)
- `browserPerWorker` <[Boolean]> Allows to run tests for each [jest worker](https://jestjs.io/docs/cli#--maxworkersnumstring) in an individual browser.
- `exitOnPageError` <[boolean]> Exits page on any global error message thrown. Defaults to true.

#### Example 1

```js
// jest-puppeteer.config.js
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== "false",
  },
  server: {
    command: "node server.js",
    port: 4444,
  },
};
```

#### Example 2

This example uses an already running instance of Chrome by passing the active web socket endpoint to `connect`. This is useful, for example, when you want to connect to Chrome running in the cloud.

```js
// jest-puppeteer.config.js
const wsEndpoint = fs.readFileSync(endpointPath, "utf8");

module.exports = {
  connect: {
    browserWSEndpoint: wsEndpoint,
  },
  server: {
    command: "node server.js",
    port: 4444,
  },
};
```

## Inspiration

Thanks to Fumihiro Xue for his great [Jest example](https://github.com/xfumihiro/jest-puppeteer-example).

## License

MIT
