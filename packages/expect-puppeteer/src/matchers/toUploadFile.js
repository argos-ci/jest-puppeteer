async function toUploadFile(page, selector, file, options = { timeout: 500 }) {
  let input

  try {
    input = await page.waitFor(selector, options)
  } catch (error) {
    throw new Error(`Unable to find "${selector}" field`)
  }

  await input.uploadFile(file)
}

export default toUploadFile
