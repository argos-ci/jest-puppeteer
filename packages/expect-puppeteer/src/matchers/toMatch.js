import { defaultOptions, getContext } from '../utils'

async function toMatch(instance, matcher, options) {
  options = defaultOptions(options)

  const { page, handle } = await getContext(instance, () => document.body)

  try {
    await page.waitForFunction(
      (handle, matcher) => {
        if (!handle) return false
        return handle.textContent.match(new RegExp(matcher)) !== null
      },
      options,
      handle,
      matcher,
    )
  } catch (error) {
    throw new Error(`Text not found "${matcher}"`)
  }
}

export default toMatch
