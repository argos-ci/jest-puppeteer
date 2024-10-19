# 🎪 jest-puppeteer

[![npm version](https://img.shields.io/npm/v/jest-puppeteer.svg)](https://www.npmjs.com/package/jest-puppeteer)
[![npm dm](https://img.shields.io/npm/dm/jest-puppeteer.svg)](https://www.npmjs.com/package/jest-puppeteer)
[![npm dt](https://img.shields.io/npm/dt/jest-puppeteer.svg)](https://www.npmjs.com/package/jest-puppeteer)

`jest-puppeteer` is a Jest preset that enables end-to-end testing with Puppeteer. It offers a straightforward API for launching new browser instances and interacting with web pages through them.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Install the packages](#install-the-packages)
   - [Write a test](#write-a-test)
   - [Use with Typescript](#use-with-typescript)
   - [Visual testing with Argos](#visual-testing-with-argos)
2. [Recipes](#recipes)
   - [Enhance testing with `expect-puppeteer` lib](#enhance-testing-with-expect-puppeteer-lib)
   - [Debug mode](#debug-mode)
   - [Automatic server starting](#automatic-server-starting)
   - [Customizing Puppeteer instance](#customizing-puppeteer-instance)
   - [Customizing `setupTestFrameworkScriptFile` or `setupFilesAfterEnv`](#customizing-setupTestFrameworkScriptFile-or-setupFilesAfterEnv)
   - [Extend `PuppeteerEnvironment`](#extend-puppeteerenvironment)
   - [Implementing custom `globalSetup` and `globalTeardown`](#implementing-custom-globalsetup-and-globalteardown)
3. [Configuring Jest-Puppeteer](#configuring-jest-puppeteer)
4. [API](#api)
5. [Troubleshooting](#troubleshooting)
6. [Acknowledgements](#acknowledgements)

## Getting Started

### Install the packages

```bash
npm install --save-dev jest-puppeteer puppeteer jest
```

### Update your Jest configuration

Add jest-puppeteer as a preset in your Jest configuration file "jest.config.js":

```json
{
  "preset": "jest-puppeteer"
}
```

> **Note**
> Ensure you remove any existing `testEnvironment` options from your Jest configuration

### Write a test

To write a test, create a new file with a `.test.js` extension, and include your test logic using the `page` exposed by `jest-puppeteer`. Here's a basic example:

```js
import "expect-puppeteer";

describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatchTextContent("google");
  });
});
```

### Use with TypeScript

TypeScript is natively supported from v8.0.0, for previous versions, you have to use [community-provided types](https://github.com/DefinitelyTyped/DefinitelyTyped).

_Note : If you have upgraded to version v10.1.2 or above, we strongly recommend that you uninstall them :_

```bash
npm uninstall --save-dev @types/jest-environment-puppeteer @types/expect-puppeteer
```

Native types definitions are available whether you use `@types/jest` or `@jest/globals` for [jest types](https://jestjs.io/docs/getting-started#type-definitions).

Once setup, import the jest-puppeteer modules in your test file, then write your test logic the same way you would in Javascript.

- If using `@types/jest` :

```ts
// import jest-puppeteer globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("Google", (): void => {
  beforeAll(async (): Promise<void> => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async (): Promise<void> => {
    await expect(page).toMatchTextContent("google");
  });
});
```

- If using `@jest/globals` :

```ts
// import jest types
import { expect, describe, beforeAll, it } from "@jest/globals";

// import jest-puppeteer globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("Google", (): void => {
  beforeAll(async (): Promise<void> => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async (): Promise<void> => {
    await expect(page).toMatchTextContent("google");
  });
});
```

### Visual testing with Argos

[Argos](https://argos-ci.com) is a powerful visual testing tool that allows to review visual changes introduced by each pull request.
By integrating Argos with jest-puppeteer, you can easily capture and compare screenshots to ensure the visual consistency of your application.

To get started with Argos, follow these steps:

1. [Install Argos GitHub App](https://github.com/apps/argos-ci)
2. Install the packages

```sh
npm install --save-dev @argos-ci/cli @argos-ci/puppeteer
```

3. Take screenshots during E2E tests with: `await argosScreenshot(page, "/screenshots/myScreenshot.png")`
4. Include the following command in your CI workflow to upload screenshots to Argos: `npx @argos-ci/cli upload ./screenshots`

After installing Argos, learn how to [review visual changes](https://argos-ci.com/docs/review-changes) in your development workflow.

#### Synchronous configuration

```js
// jest-puppeteer.config.cjs

/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== "false",
  },
  server: {
    command: "node server.js",
    port: 4444,
    launchTimeout: 10000,
    debug: true,
  },
};
```

#### Asynchronous configuration

In this example, an already-running instance of Chrome is used by passing the active WebSocket endpoint to the `connect` option. This can be particularly helpful when connecting to a Chrome instance running in the cloud.

```js
// jest-puppeteer.config.cjs
const dockerHost = "http://localhost:9222";

async function getConfig() {
  const data = await fetch(`${dockerHost}/json/version`).json();
  const browserWSEndpoint = data.webSocketDebuggerUrl;
  /** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
  return {
    connect: {
      browserWSEndpoint,
    },
    server: {
      command: "node server.js",
      port: 3000,
      launchTimeout: 10000,
      debug: true,
    },
  };
}

module.exports = getConfig();
```

## <a name="recipes"></a>Recipes

### Enhance testing with `expect-puppeteer` lib

It can be challenging to write integration tests with the [Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md), as it is not specifically designed for testing purposes.
To simplify the writing tests process, the [expect-puppeteer API](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api) offers specific matchers when making expectations on a [Puppeteer Page](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page).

Here are some examples:

#### Find a text in the page

```js
// Assert that the current page contains 'Text in the page'
await expect(page).toMatchTextContent("Text in the page");
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

### Debug mode

Debugging tests can sometimes be challenging. Jest Puppeteer provides a debug mode that allows you to pause test execution and inspect the browser. To activate debug mode, call jestPuppeteer.debug() in your test:

```js
await jestPuppeteer.debug();
```

Remember that using `jestPuppeteer.debug()` will pause the test indefinitely. To resume, remove or comment out the line and rerun the test. To prevent timeouts during debugging, consider increasing Jest's default timeout:

```js
jest.setTimeout(300000); // Set the timeout to 5 minutes (300000 ms)
```

### Automatic server starting

Jest Puppeteer allows to start a server before running your tests suite and will close it after the tests end. To automatically start a server, you have to add a server section to your `jest-puppeteer.config.cjs` file and specify the command to start server and a port number:

```js
// jest-puppeteer.config.cjs

/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  server: {
    command: "node server.js",
    port: 4444,
  },
};
```

Other options are documented in [jest-dev-server](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server).

### Customizing Puppeteer instance

To customize Puppeteer instance, you can update the `jest-puppeteer.config.cjs` file.

For example, to launch Firefox browser instead of default chrome, you can set the `launch.product` property to "firefox".

You can also update the browser context to use the incognito mode to have isolation between instances. Read [jest-puppeteer-environment readme](https://github.com/smooth-code/jest-puppeteer/blob/master/packages/jest-environment-puppeteer/README.md) to learn more about the possible options.

Default config values:

```js
// jest-puppeteer.config.cjs

/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== "false",
    product: "chrome",
  },
  browserContext: "default",
};
```

### Customizing `setupTestFrameworkScriptFile` or `setupFilesAfterEnv`

If you are using custom setup files, you must include `expect-puppeteer` in your setup to access the matchers it offers. Add the following to your custom setup file:

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

Be cautious when setting your custom setupFilesAfterEnv and globalSetup, as it may result in undefined globals. Using multiple projects in Jest is one way to mitigate this issue.

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

If you need to use your custom environment, you can extend the `PuppeteerEnvironment`.

First, create a JavaScript file for your custom environment:

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

Next, assign your JavaScript file's path to the [`testEnvironment`](https://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string) property in your Jest configuration:

```js
{
  // ...
  "testEnvironment": "./custom-environment.js"
}
```

Your custom `setup` and `teardown` will now be executed before and after each test suite, respectively.

### Implementing custom `globalSetup` and `globalTeardown`

You can create custom [`globalSetup`](https://facebook.github.io/jest/docs/en/configuration.html#globalsetup-string) and [`globalTeardown`](https://facebook.github.io/jest/docs/en/configuration.html#globalteardown-string) methods. For this purpose, jest-environment-puppeteer exposes the setup and teardown methods, allowing you to integrate them with your custom global setup and teardown methods, as shown in the example below:

```js
// global-setup.js
const setupPuppeteer = require("jest-environment-puppeteer/setup");

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig);
  // Your global setup
};
```

```js
// global-teardown.js
const teardownPuppeteer = require("jest-environment-puppeteer/teardown");

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

Now, your custom `globalSetup` and `globalTeardown` will be executed once before and after all test suites, respectively.

## Configuring Jest-Puppeteer

Jest Puppeteer employs cosmiconfig for configuration file support, allowing you to configure Jest Puppeteer in various ways (listed in order of precedence):

- A `"jest-puppeteer"` key in your `package.json` file.
- A `.jest-puppeteerrc` file in either JSON or YAML format.
- A `.jest-puppeteerrc.json`, `.jest-puppeteerrc.yml`, `.jest-puppeteerrc.yaml`, or `.jest-puppeteerrc.json5` file.
- A `.jest-puppeteerrc.js`, `.jest-puppeteerrc.cjs`, `jest-puppeteer.config.js`, or `jest-puppeteer.config.cjs` file that exports an object using `module.exports`.
- A `.jest-puppeteerrc.toml` file.

By default, the configuration is searched for at the root of the project. To define a custom path, use the `JEST_PUPPETEER_CONFIG` environment variable.

Ensure that the exported configuration is either a config object or a Promise that returns a config object.

```ts
interface JestPuppeteerConfig {
  /**
   * Puppeteer connect options.
   * @see https://pptr.dev/api/puppeteer.connectoptions
   */
  connect?: ConnectOptions;
  /**
   * Puppeteer launch options.
   * @see https://pptr.dev/api/puppeteer.launchoptions
   */
  launch?: PuppeteerLaunchOptions;
  /**
   * Server config for `jest-dev-server`.
   * @see https://www.npmjs.com/package/jest-dev-server
   */
  server?: JestDevServerConfig | JestDevServerConfig[];
  /**
   * Allow to run one browser per worker.
   * @default false
   */
  browserPerWorker?: boolean;
  /**
   * Browser context to use.
   * @default "default"
   */
  browserContext?: "default" | "incognito";
  /**
   * Exit on page error.
   * @default true
   */
  exitOnPageError?: boolean;
  /**
   * Use `runBeforeUnload` in `page.close`.
   * @see https://pptr.dev/api/puppeteer.page.close
   * @default false
   */
  runBeforeUnloadOnClose?: boolean;
}
```

## API

### `global.browser`

Provides access to the [Puppeteer Browser](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-browser).

```js
it("should open a new page", async () => {
  const page = await browser.newPage();
  await page.goto("https://google.com");
});
```

### `global.page`

Provides access to a [Puppeteer Page](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page) that is opened at the start (most commonly used).

```js
it("should fill an input", async () => {
  await page.type("#myinput", "Hello");
});
```

### `global.context`

Provides access to a [browser context](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-browsercontext) that is instantiated when the browser is launched. You can control whether each test has its own isolated browser context using the `browserContext` option in your configuration file.

### `global.expect(page)`

A helper for making Puppeteer assertions. For more information, refer to [the documentation](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/README.md#api).

```js
await expect(page).toMatchTextContent("A text in the page");
// ...
```

### `global.jestPuppeteer.debug()`

Put test in debug mode.

- Jest is suspended (no timeout)
- A `debugger` instruction to Chromium, if Puppeteer has been launched with `{ devtools: true }` it will pause

```js
it("should put test in debug mode", async () => {
  await jestPuppeteer.debug();
});
```

### `global.jestPuppeteer.resetPage()`

To reset `global.page` before each test, use the following code:

```js
beforeEach(async () => {
  await jestPuppeteer.resetPage();
});
```

### `global.jestPuppeteer.resetBrowser()`

To reset `global.browser`, `global.context`, and `global.page` before each test, use the following code:

```js
beforeEach(async () => {
  await jestPuppeteer.resetBrowser();
});
```

## Troubleshooting

### CI Timeout

Most Continuous Integration (CI) platforms restrict the number of threads you can use. If you run multiple test suites, the tests may timeout due to Jest attempting to run Puppeteer in parallel, and the CI platform being unable to process all parallel jobs in time.

A solution to this issue is to run your tests serially in a CI environment. Users have found that [running tests serially in such environments can result in up to 50% performance improvements](https://jestjs.io/docs/en/troubleshooting#tests-are-extremely-slow-on-docker-and-or-continuous-integration-ci-server).

You can achieve this through the CLI by running:

```sh
jest --runInBand
```

Alternatively, you can set Jest to use a maximum number of workers that your CI environment supports:

```
jest --maxWorkers=2
```

### Prevent ESLint errors on global variables

Jest Puppeteer provides five global variables: browser, page, context, puppeteerConfig, and jestPuppeteer.
To prevent errors related to these globals, include them in your ESLint configuration:

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
    puppeteerConfig: true,
    jestPuppeteer: true,
  },
};
```

## Acknowledgements

Special thanks to Fumihiro Xue for providing an excellent [Jest example](https://github.com/xfumihiro/jest-puppeteer-example).
