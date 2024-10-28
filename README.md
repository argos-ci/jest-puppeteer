Let's find a balance between detailed explanations and clarity. Here’s a more comprehensive version that retains structure but elaborates more where needed:

---

# 🎪 jest-puppeteer

[![npm version](https://img.shields.io/npm/v/jest-puppeteer.svg)](https://www.npmjs.com/package/jest-puppeteer)
[![npm downloads](https://img.shields.io/npm/dm/jest-puppeteer.svg)](https://www.npmjs.com/package/jest-puppeteer)

`jest-puppeteer` is a Jest preset designed for seamless integration with Puppeteer, enabling end-to-end testing in a browser environment. With a simple API, it allows you to launch browsers and interact with web pages, making it perfect for testing UI interactions in web applications.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Basic Setup](#basic-setup)
   - [Writing Your First Test](#writing-your-first-test)
   - [TypeScript Setup](#typescript-setup)
   - [Visual Testing with Argos](#visual-testing-with-argos)
2. [Recipes](#recipes)
   - [Using `expect-puppeteer`](#using-expect-puppeteer)
   - [Debugging Tests](#debugging-tests)
   - [Automatic Server Management](#automatic-server-management)
   - [Customizing the Puppeteer Instance](#customizing-the-puppeteer-instance)
   - [Custom Test Setup](#custom-test-setup)
   - [Extending `PuppeteerEnvironment`](#extending-puppeteerenvironment)
   - [Global Setup and Teardown](#global-setup-and-teardown)
3. [Jest-Puppeteer Configuration](#jest-puppeteer-configuration)
4. [API Reference](#api-reference)
5. [Troubleshooting](#troubleshooting)
6. [Acknowledgements](#acknowledgements)

## Getting Started

### Installation

To start using `jest-puppeteer`, you’ll need to install the following packages:

```bash
npm install --save-dev jest-puppeteer puppeteer jest
```

This will install Jest (the testing framework), Puppeteer (the headless browser tool), and `jest-puppeteer` (the integration between the two).

### Basic Setup

In your Jest configuration file (`jest.config.js`), add `jest-puppeteer` as the preset:

```json
{
  "preset": "jest-puppeteer"
}
```

This will configure Jest to use Puppeteer for running your tests. Make sure to remove any conflicting `testEnvironment` settings that might be present in your existing Jest configuration, as `jest-puppeteer` manages the environment for you.

### Writing Your First Test

Once you’ve configured Jest, you can start writing tests using Puppeteer’s `page` object, which is automatically provided by `jest-puppeteer`.

Create a test file (e.g., `google.test.js`):

```js
import "expect-puppeteer";

describe("Google Homepage", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatchTextContent(/Google/);
  });
});
```

This example test navigates to Google’s homepage and checks if the page contains the word "Google". `jest-puppeteer` simplifies working with Puppeteer by exposing the `page` object, allowing you to write tests using a familiar syntax.

### TypeScript Setup

If you’re using TypeScript, `jest-puppeteer` natively supports it from version `8.0.0`. To get started with TypeScript, follow these steps:

1. Make sure your project is using the correct type definitions. If you’ve upgraded to version `10.1.2` or above, uninstall old types:

```bash
npm uninstall --save-dev @types/jest-environment-puppeteer @types/expect-puppeteer
```

2. Install `@types/jest` (`jest-puppeteer` does not support `@jest/globals`) :

```bash
npm install --save-dev @types/jest
```

3. Jest will automatically pick up type definitions from `@types/jest`. Once you’ve set up the environment, you can start writing tests in TypeScript just like in JavaScript:

```ts
import "jest-puppeteer";
import "expect-puppeteer";

describe("Google Homepage", (): void => {
  beforeAll(async (): Promise<void> => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async (): Promise<void> => {
    await expect(page).toMatchTextContent(/Google/);
  });
});
```

### Visual Testing with Argos

[Argos](https://argos-ci.com) is a powerful tool for visual testing, allowing you to track visual changes introduced by each pull request. By integrating Argos with `jest-puppeteer`, you can easily capture and compare screenshots to maintain the visual consistency of your application.

To get started, check out the [Puppeteer Quickstart Guide](https://argos-ci.com/docs/quickstart/puppeteer).

## Recipes

### Using `expect-puppeteer`

Writing tests with Puppeteer’s core API can be verbose. The `expect-puppeteer` library simplifies this by adding custom matchers, such as checking for text content or interacting with elements. Some examples:

- Assert that a page contains certain text:

```js
await expect(page).toMatchTextContent("Expected text");
```

- Simulate a button click:

```js
await expect(page).toClick("button", { text: "Submit" });
```

- Fill out a form:

```js
await expect(page).toFillForm('form[name="login"]', {
  username: "testuser",
  password: "password",
});
```

### Debugging Tests

Debugging can sometimes be tricky in headless browser environments. `jest-puppeteer` provides a helpful `debug()` function, which pauses test execution and opens the browser for manual inspection:

```js
await jestPuppeteer.debug();
```

To prevent the test from timing out, increase Jest’s timeout:

```js
jest.setTimeout(300000); // 5 minutes
```

This can be particularly useful when you need to step through interactions or inspect the state of the page during test execution.

### Automatic Server Management

If your tests depend on a running server (e.g., an Express app), you can configure `jest-puppeteer` to automatically start and stop the server before and after tests:

```js
module.exports = {
  server: {
    command: "node server.js",
    port: 4444,
  },
};
```

This eliminates the need to manually manage your server during testing.

### Customizing the Puppeteer Instance

You can easily customize the Puppeteer instance used in your tests by modifying the `jest-puppeteer.config.js` file. For example, if you want to launch Firefox instead of Chrome:

```js
module.exports = {
  launch: {
    product: "firefox",
    headless: process.env.HEADLESS !== "false",
  },
};
```

This file allows you to configure browser options, set up browser contexts, and more.

### Custom Test Setup

If you have custom setup requirements, you can define setup files to initialize your environment before each test. For instance, you may want to import `expect-puppeteer` globally:

```js
// setup.js
require("expect-puppeteer");
```

Then, in your Jest config:

```js
module.exports = {
  setupFilesAfterEnv: ["./setup.js"],
};
```

### Extending `PuppeteerEnvironment`

For advanced use cases, you can extend the default `PuppeteerEnvironment` class to add custom functionality:

```js
const PuppeteerEnvironment = require("jest-environment-puppeteer");

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();
    // Custom setup logic
  }

  async teardown() {
    // Custom teardown logic
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
```

### Global Setup and Teardown

Sometimes, tests may require a global setup or teardown step that only runs once per test suite. You can define custom `globalSetup` and `globalTeardown` scripts:

```js
// global-setup.js
const setupPuppeteer = require("jest-environment-puppeteer/setup");

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig);
  // Additional setup logic
};
```

In your Jest configuration, reference these files:

```json
{
  "globalSetup": "./global-setup.js",
  "globalTeardown": "./global-teardown.js"
}
```

### Jest-Puppeteer Configuration

Jest-Puppeteer supports various configuration formats through [cosmiconfig](https://github.com/davidtheclark/cosmiconfig), allowing flexible ways to define your setup. By default, the configuration is looked for at the root of your project, but you can also define a custom path using the `JEST_PUPPETEER_CONFIG` environment variable.

Possible configuration formats:

- A `"jest-puppeteer"` key in your `package.json`.
- A `.jest-puppeteerrc` file (JSON, YAML, or JavaScript).
- A `.jest-puppeteer.config.js` or `.jest-puppeteer.config.cjs` file that exports a configuration object.

Example of a basic configuration file (`jest-puppeteer.config.js`):

```js
module.exports = {
  launch: {
    headless: process.env.HEADLESS !== "false",
    dumpio: true, // Show browser console logs
  },
  browserContext: "default", // Use "incognito" if you want isolated sessions per test
  server: {
    command: "node server.js",
    port: 4444,
    launchTimeout: 10000,
    debug: true,
  },
};
```

You can further extend this configuration to connect to a remote instance of Chrome or customize the environment for your test runs.

## API Reference

Jest-Puppeteer exposes several global objects and methods to facilitate test writing:

- **`global.browser`**: Provides access to the Puppeteer [Browser](https://pptr.dev/#?product=Puppeteer&version=v13.0.0&show=api-class-browser) instance.

  Example:

  ```js
  const page = await browser.newPage();
  await page.goto("https://example.com");
  ```

- **`global.page`**: The default Puppeteer [Page](https://pptr.dev/#?product=Puppeteer&version=v13.0.0&show=api-class-page) object, automatically created and available in tests.

  Example:

  ```js
  await page.type("#input", "Hello World");
  ```

- **`global.context`**: Gives access to the [browser context](https://pptr.dev/#?product=Puppeteer&version=v13.0.0&show=api-class-browsercontext), useful for isolating tests in separate contexts.

- **`global.expect(page)`**: The enhanced `expect` API provided by `expect-puppeteer`. You can use this to make assertions on the Puppeteer `page`.

  Example:

  ```js
  await expect(page).toMatchTextContent("Expected text on page");
  ```

- **`global.jestPuppeteer.debug()`**: Suspends test execution, allowing you to inspect the browser and debug.

  Example:

  ```js
  await jestPuppeteer.debug();
  ```

- **`global.jestPuppeteer.resetPage()`**: Resets the `page` object before each test.

  Example:

  ```js
  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });
  ```

- **`global.jestPuppeteer.resetBrowser()`**: Resets the `browser`, `context`, and `page` objects, ensuring a clean slate for each test.

  Example:

  ```js
  beforeEach(async () => {
    await jestPuppeteer.resetBrowser();
  });
  ```

These methods simplify the setup and teardown process for tests, making it easier to work with Puppeteer in a Jest environment.

## Troubleshooting

### CI Timeout Issues

In CI environments, tests may occasionally time out due to limited resources. Jest-Puppeteer allows you to control the number of workers used to run tests. Running tests serially can help avoid these timeouts:

Run tests in a single process:

```bash
jest --runInBand
```

Alternatively, you can limit the number of parallel workers:

```bash
jest --maxWorkers=2
```

This ensures that your CI environment doesn’t get overloaded by too many concurrent processes, which can improve the reliability of your tests.

### Debugging CI Failures

Sometimes, failures happen only in CI environments and not locally. In such cases, use the `debug()` method to open a browser during CI runs and inspect the page manually:

```js
await jestPuppeteer.debug();
```

To avoid test timeouts in CI, set a larger timeout during the debugging process:

```js
jest.setTimeout(600000); // 10 minutes
```

### Preventing ESLint Errors with Global Variables

Jest-Puppeteer introduces global variables like `page`, `browser`, `context`, etc., which ESLint may flag as undefined. You can prevent this by adding these globals to your ESLint configuration:

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

This configuration will prevent ESLint from throwing errors about undefined globals.

## Acknowledgements

Special thanks to [Fumihiro Xue](https://github.com/xfumihiro) for providing an excellent [Jest Puppeteer example](https://github.com/xfumihiro/jest-puppeteer-example), which served as an inspiration for this package.
