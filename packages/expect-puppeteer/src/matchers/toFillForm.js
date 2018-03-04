import toFill from './toFill'

/* eslint-disable no-restricted-syntax, no-await-in-loop */
async function toFillForm(
  page,
  formSelector,
  values,
  options = { timeout: 500 },
) {
  try {
    await page.waitFor(formSelector, options)
  } catch (error) {
    throw new Error(`Unable to find "${formSelector}" form`)
  }

  for (const name of Object.keys(values)) {
    await toFill(
      page,
      `${formSelector} [name="${name}"]`,
      values[name],
      options,
    )
  }
}

export default toFillForm
