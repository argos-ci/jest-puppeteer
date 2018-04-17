import { defaultOptions, getContext, errorHandler } from '../utils'

async function notToMatch(instance, matcher, options) {
  options = defaultOptions(options)

  const { page, handle } = await getContext(instance, () => document.body)

  try {
    await page.waitForFunction(
      (handle, matcher) => {
        if (!handle) return false
        return handle.textContent.match(new RegExp(matcher)) === null
      },
      options,
      handle,
      matcher,
    )
  } catch (error) {
    errorHandler(error, `Text found "${matcher}"`)
  }
}

export default notToMatch
