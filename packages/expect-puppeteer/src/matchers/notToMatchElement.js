import { enhanceError } from '../utils'
import { defaultOptions } from '../options'
import toMatchElement from './toMatchElement'

async function notToMatchElement(
  instance,
  selector,
  { text, hidden, visible, ...options } = {},
) {
  options = defaultOptions(options)
  if (hidden) {
    options.visible = true
  } else {
    options.hidden = true
  }

  try {
    const element = await toMatchElement(instance, selector, {
      ...options,
      text,
    })
    return !element
  } catch (error) {
    throw enhanceError(
      error,
      `Element ${selector}${
        text !== undefined ? ` (text: "${text}") ` : ' '
      }found`,
    )
  }
}

export default notToMatchElement
