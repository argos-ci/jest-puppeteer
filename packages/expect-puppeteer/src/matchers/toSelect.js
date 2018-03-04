async function toSelect(page, selector, valueOrText) {
  const foundValue = await page.$$eval(
    `${selector} option`,
    (options, valueOrText, selector) => {
      const option = options.find(
        option =>
          option.value === valueOrText || option.textContent === valueOrText,
      )
      if (!option) {
        throw new Error(`Option not found "${selector}" ("${valueOrText}")`)
      }
      return option.value
    },
    valueOrText,
    selector,
  )
  await page.select(selector, foundValue)
}

export default toSelect
