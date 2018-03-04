async function toFill(page, selector, value, options = { timeout: 500 }) {
  try {
    await page.waitFor(selector, options)
  } catch (error) {
    throw new Error(`Unable to find "${selector}" field`)
  }

  await page.click(selector, { clickCount: 3 })
  await page.keyboard.type(value)
}

export default toFill
