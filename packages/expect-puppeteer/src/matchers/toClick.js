async function toClick(page, selector, { text } = {}) {
  await page.$$eval(
    selector,
    (elements, selector, text) => {
      const element =
        text !== undefined
          ? [...elements].find(({ textContent }) => textContent.match(text))
          : elements[0]

      if (!element) {
        throw new Error(
          `Element ${selector} ${
            text !== undefined ? `(text: "${text}")` : ''
          } not found`,
        )
      }

      element.click()
    },
    selector,
    text,
  )
}

export default toClick
