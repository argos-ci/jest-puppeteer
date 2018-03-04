# expect-puppeteer

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Assertion library for Puppeteer.

```
npm install expect-puppeteer
```

## Usage

```js
import expectPage from 'expect-puppeteer'
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://google.com')
  await expectPage(page).toMatch('google')
  await browser.close()
})()
```

## API

##### Table of Contents

<!-- toc -->

* [expectPage(page).toClick](#expectpagepagetoclickselectoroptions)
* [expectPage(page).toDisplayDialog](#expectpagepagetodisplaydialogblock)
* [expectPage(page).toFill](#expectpagepagetofillselectorvalueoptions)
* [expectPage(page).toFillForm](#expectpagepagetofillformselectorvaluesoptions)
* [expectPage(page).toMatch](#expectpagepagetomatchtext)
* [expectPage(page).toSelect](#expectpagepagetoselectselectorvalueortext)
* [expectPage(page).toUploadFile](#expectpagepagetouploadfileselectorfilepath)

### expectPage(page).toClick(selector[, options])

* `selector` <[string]> A [selector] to click on
* `options` <[Object]> Optional parameters
  * text <[string]> A text to match

```js
await expectPage(page).toClick('button', { text: 'Home' })
```

### expectPage(page).toDisplayDialog(block)

* `block` <[function]> A [function] that should trigger a dialog

```js
await expectPage(page).toDisplayDialog(async () => {
  await expectPage(page).toClick('button', { text: 'Show dialog' })
})
```

### expectPage(page).toFill(selector, value[, options])

* `selector` <[string]> A [selector] to match field
* `value` <[string]> Value to fill
* `options` <[Object]> Optional parameters
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expectPage(page).toFill('input[name="firstName"]', 'James')
```

### expectPage(page).toFillForm(selector, values[, options])

* `selector` <[string]> A [selector] to match form
* `values` <[Object]> Values to fill
* `options` <[Object]> Optional parameters
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expectPage(page).toFillForm('form[name="myForm"]', {
  firstName: 'James',
  lastName: 'Bond',
})
```

### expectPage(page).toMatch(text)

* `text` <[string]> A text to match in page
* `options` <[Object]> Optional parameters
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expectPage(page).toMatch('Lorem ipsum')
```

### expectPage(page).toSelect(selector, valueOrText)

* `selector` <[string]> A [selector] to match select [element]
* `valueOrText` <[string]> Value or text matching option

```js
await expectPage(page).toSelect('select[name="choices"]', 'Choice 1')
```

### expectPage(page).toUploadFile(selector, filePath)

* `selector` <[string]> A [selector] to match input [element]
* `filePath` <[string]> A file path

```js
import path from 'path'

await expectPage(page).toUploadFile(
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
