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
