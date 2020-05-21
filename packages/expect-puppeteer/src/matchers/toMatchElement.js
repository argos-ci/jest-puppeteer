import { getContext, enhanceError, expandSearchExpr } from '../utils'
import { defaultOptions } from '../options'

async function toMatchElement(
  instance,
  selector,
  { text: searchExpr, ...options } = {},
) {
  options = defaultOptions(options)
  selector =
    selector instanceof Object
      ? { ...selector }
      : { type: 'css', value: selector }

  const { page, handle } = await getContext(instance, () => document)
  const { text, regexp } = expandSearchExpr(searchExpr)

  try {
    return await waitForElement(Date.now() + options.timeout)
  } catch (error) {
    throw enhanceError(
      error,
      `Element ${selector.value}${
        text !== null || regexp !== null ? ` (text: "${text || regexp}") ` : ' '
      }not found`,
    )
  }

  // Use a custom function that is retried during timeout period instead of
  // waitForFunction, waitForSelector, etc.
  //
  // waitForFunction isn't used because it runs on the browser and would have
  // to implement custom selector logic. Instead, use Puppeteer query apis
  // (specifically JSHandle.$$) to get access to improvements made there,
  // particularly custom selection handlers (registerCustomQueryHandler.)
  //
  // waitForSelector can't be used because this needs all elements that match
  // the selector to check text content, and it only returns the first, which
  // may match but not have the text we're looking for.
  async function waitForElement(timeout) {
    const result = await getElement(handle, selector)

    if (!result && options.hidden) return undefined
    if (await elementMatchesVisibilityOptions(result)) return result

    if (Date.now() > timeout) throw new Error('waiting for function failed')

    await page.waitFor(30)
    return waitForElement(timeout)
  }

  // Check if the element handle matches the given visibility options:
  // hidden, visible, etc.
  function elementMatchesVisibilityOptions(result) {
    if (!result) return false
    if (result && !options.visible && !options.hidden) return true

    return page.evaluate(
      (result, waitForVisible, waitForHidden) => {
        const element =
          result.nodeType === Node.TEXT_NODE ? result.parentElement : result

        const style = window.getComputedStyle(element)
        const isVisible =
          style && style.visibility !== 'hidden' && hasVisibleBoundingBox()
        const success =
          waitForVisible === isVisible || waitForHidden === !isVisible
        return success

        function hasVisibleBoundingBox() {
          const rect = element.getBoundingClientRect()
          return !!(rect.top || rect.bottom || rect.width || rect.height)
        }
      },
      result,
      options.visible,
      options.hidden,
    )
  }

  // Get element using JSHandle queries so the selector matches exactly to puppeteer $,$$,waitForSelector apis.
  // Allows toMatchElement to work with custom selector handlers `puppeteer.registerCustomQueryHandler`
  async function getElement(handle, { type, value: selector }) {
    const list = await Promise.all(
      (await handle[type === 'xpath' ? '$x' : '$$'](selector)).map(
        async handle => {
          if (text || regexp)
            return {
              handle,
              textContent: await page.evaluate(e => e.textContent, handle),
            }
          return { handle }
        },
      ),
    )

    let found = list[0]

    if (regexp) {
      const [, pattern, flags] = regexp.match(/\/(.*)\/(.*)?/)
      found = list.find(({ textContent }) =>
        textContent
          .replace(/\s+/g, ' ')
          .trim()
          .match(new RegExp(pattern, flags)),
      )
    }

    if (text) {
      found = list.find(({ textContent }) =>
        textContent
          .replace(/\s+/g, ' ')
          .trim()
          .includes(text),
      )
    }

    return found && found.handle
  }
}

export default toMatchElement
