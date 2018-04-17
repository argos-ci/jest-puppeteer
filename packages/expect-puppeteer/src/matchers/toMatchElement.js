import { defaultOptions, getContext, errorHandler } from '../utils'

async function toMatchElement(instance, selector, { text, ...options } = {}) {
  options = defaultOptions(options)

  const { page, handle } = await getContext(instance, () => document)

  const getElement = (handle, selector, text) => {
    const elements = handle.querySelectorAll(selector)
    if (text !== undefined) {
      return [...elements].find(({ textContent }) => textContent.match(text))
    }
    return elements[0]
  }

  try {
    await page.waitForFunction(getElement, options, handle, selector, text)
  } catch (error) {
    errorHandler(
      error,
      `Element ${selector}${
        text !== undefined ? ` (text: "${text}") ` : ' '
      }not found`,
    )
  }

  const jsHandle = await page.evaluateHandle(getElement, handle, selector, text)
  return jsHandle.asElement()
}

export default toMatchElement
