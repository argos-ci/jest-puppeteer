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

## Why do I need it

Writing integration test is very hard, especially when you are testing a Single Page Applications. Data are loaded asynchronously and it is difficult to know exactly when an element will be displayed in the page.

[Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md) is great, but it is low level and not designed for integration testing.

This API is designed for integration testing:

* It will wait for element before running an action
* It adds additional feature like matching an element using text

**Example**

```js
// Does not work if button is not in page
await page.click('button')

// Will try while 500ms to click on "button"
await page.toClick('button')

// Will match a button with a "My button" text inside
await page.toClick('button', { text: 'My button' })
```

## API

##### Table of Contents

<!-- toc -->

* [toClick](#toClick)
* [toDisplayDialog](#toDisplayDialog)
* [toFill](#toFill)
* [toFillForm](#toFillForm)
* [toMatch](#toMatch)
* [toMatchElement](#toMatchElement)
* [toSelect](#toSelect)
* [toUploadFile](#toUploadFile)

### <a name="toClick"></a>expect(instance).toClick(selector[, options])

Expect an element to be in the page or element, then click on it.

* `instance` <[Page]|[ElementHandle]> Context
* `selector` <[string]> A [selector] to click on
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.
  * `text` <[string]> A text or a RegExp to match in element `textContent`.

```js
await expect(page).toClick('button', { text: 'Home' })
```

### <a name="toDisplayDialog"></a>expect(page).toDisplayDialog(block)

Expect block function to trigger a dialog and returns it.

* `page` <[Page]> Context
* `block` <[function]> A [function] that should trigger a dialog

```js
const dialog = await expect(page).toDisplayDialog(async () => {
  await expect(page).toClick('button', { text: 'Show dialog' })
})
```

### <a name="toFill"></a>expect(instance).toFill(selector, value[, options])

Expect a control to be in the page or element, then fill it with text.

* `instance` <[Page]|[ElementHandle]> Context
* `selector` <[string]> A [selector] to match field
* `value` <[string]> Value to fill
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expect(page).toFill('input[name="firstName"]', 'James')
```

### <a name="toFillForm"></a>expect(instance).toFillForm(selector, values[, options])

Expect a form to be in the page or element, then fill its controls.

* `instance` <[Page]|[ElementHandle]> Context
* `selector` <[string]> A [selector] to match form
* `values` <[Object]> Values to fill
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expect(page).toFillForm('form[name="myForm"]', {
  firstName: 'James',
  lastName: 'Bond',
})
```

### <a name="toMatch"></a>expect(instance).toMatch(matcher[, options])

Expect a text or a string RegExp to be present in the page or element.

* `instance` <[Page]|[ElementHandle]> Context
* `matcher` <[string]> A text or a RegExp to match in page
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
// Matching using text
await expect(page).toMatch('Lorem ipsum')
// Matching using RegExp
await expect(page).toMatch('lo.*')
```

### <a name="toMatchElement"></a>expect(instance).toMatchElement(selector[, options])

Expect an element be present in the page or element.

* `instance` <[Page]|[ElementHandle]> Context
* `selector` <[string]> A [selector] to match element
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.
  * `text` <[string]> A text or a RegExp to match in element `textContent`.

```js
// Select a row containing a text
const row = await expect(page).toMatchElement('tr', { text: 'My row' })
// Click on the third column link
await expect(row).toClick('td:nth-child(2) a')
```

### <a name="toSelect"></a>expect(instance).toSelect(selector, valueOrText[, options])

Expect a select control to be present in the page or element, then select the specified option.

* `instance` <[Page]|[ElementHandle]> Context
* `selector` <[string]> A [selector] to match select [element]
* `valueOrText` <[string]> Value or text matching option
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
await expect(page).toSelect('select[name="choices"]', 'Choice 1')
```

### <a name="toUploadFile"></a>expect(instance).toUploadFile(selector, filePath[, options])

Expect a input file control to be present in the page or element, then fill it with a local file.

* `instance` <[Page]|[ElementHandle]> Context
* `selector` <[string]> A [selector] to match input [element]
* `filePath` <[string]> A file path
* `options` <[Object]> Optional parameters
  * `polling` <[string]|[number]> An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
    * `raf` - to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
    * `mutation` - to execute `pageFunction` on every DOM mutation.
  * `timeout` <[number]> maximum time to wait for in milliseconds. Defaults to `500`.

```js
import path from 'path'

await expect(page).toUploadFile(
  'input[type="file"]',
  path.join(__dirname, 'file.txt'),
)
```

## Configure default options

To configure default options like `timeout`, `expect-puppeteer` exposes two methods: `getDefaultOptions` and `setDefaultOptions`. You can find available options in [Puppeteer `page.waitForFunction` documentation](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagewaitforfunctionpagefunction-options-args). Default options are set to: `{ timeout: 500 }`.

```js
import { setDefaultOptions } from 'jest-puppeteer'

setDefaultOptions({ timeout: 1000 })
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
[page]: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page 'Page'
[elementhandle]: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-elementhandle 'ElementHandle'
