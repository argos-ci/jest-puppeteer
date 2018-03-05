# expect-puppeteer

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Assertion library for Puppeteer.

```
npm install expect-puppeteer
```

## Usage

Without Jest:

```js
import expect from 'expect-puppeteer'
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://google.com')
  await expect(page).toMatch('google')
  await browser.close()
})()
```

## Use with Jest

To use with Jest, just modify your configuration:

```json
{
  "setupTestFrameworkScriptFile": "expect-puppeteer"
}
```

## API

##### Table of Contents

<!-- toc -->

* [toClick](#expectpagetoclickselector-options)
* [toDisplayDialog](#expectpagetodisplaydialogblock)
* [toFill](#expectpagetofillselector-value-options)
* [toFillForm](#expectpagetofillformselector-values-options)
* [toMatch](#expectpagetomatchtext)
* [toSelect](#expectpagetoselectselector-valueortext)
* [toUploadFile](#expectpagetouploadfileselector-filepath)

### expect(page).toClick(selector[, options])

* `selector` <[string]> A [selector] to click on
* `options` <[Object]> Optional parameters
  * text <[string]> A text to match

```js
await expect(page).toClick('button', { text: 'Home' })
```

### expect(page).toDisplayDialog(block)

* `block` <[function]> A [function] that should trigger a dialog

```js
await expect(page).toDisplayDialog(async () => {
  await expect(page).toClick('button', { text: 'Show dialog' })
})
```

### expect(page).toFill(selector, value[, options])

* `selector` <[string]> A [selector] to match field
* `value` <[string]> Value to fill
* `options` <[Object]> Optional parameters
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expect(page).toFill('input[name="firstName"]', 'James')
```

### expect(page).toFillForm(selector, values[, options])

* `selector` <[string]> A [selector] to match form
* `values` <[Object]> Values to fill
* `options` <[Object]> Optional parameters
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expect(page).toFillForm('form[name="myForm"]', {
  firstName: 'James',
  lastName: 'Bond',
})
```

### expect(page).toMatch(text)

* `text` <[string]> A text to match in page
* `options` <[Object]> Optional parameters
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expect(page).toMatch('Lorem ipsum')
```

### expect(page).toSelect(selector, valueOrText)

* `selector` <[string]> A [selector] to match select [element]
* `valueOrText` <[string]> Value or text matching option

```js
await expect(page).toSelect('select[name="choices"]', 'Choice 1')
```

### expect(page).toUploadFile(selector, filePath)

* `selector` <[string]> A [selector] to match input [element]
* `filePath` <[string]> A file path

```js
import path from 'path'

await expect(page).toUploadFile(
  'input[type="file"]',
  path.join(__dirname, 'file.txt'),
)
```

## License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/jest-puppeteer.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/jest-puppeteer
[version-badge]: https://img.shields.io/npm/v/expect-puppeteer.svg?style=flat-square
[package]: https://www.npmjs.com/package/expect-puppeteer
[license-badge]: https://img.shields.io/npm/l/expect-puppeteer.svg?style=flat-square
[license]: https://github.com/smooth-code/jest-puppeteer/blob/master/LICENSE
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 'Array'
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type 'Boolean'
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function 'Function'
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type 'Number'
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object 'Object'
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 'Promise'
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type 'String'
[error]: https://nodejs.org/api/errors.html#errors_class_error 'Error'
[element]: https://developer.mozilla.org/en-US/docs/Web/API/element 'Element'
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 'Map'
[selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors 'selector'
