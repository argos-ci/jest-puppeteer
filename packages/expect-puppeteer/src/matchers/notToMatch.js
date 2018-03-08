async function notToMatch(page, matcher, options = { timeout: 500 }) {
  try {
    await page.waitForFunction(
      `document.body && document.body.textContent.match(new RegExp('${matcher}')) === null`,
      options,
    )
  } catch (error) {
    throw new Error(`Text found "${matcher}"`)
  }
}

export default notToMatch
