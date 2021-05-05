import toMatchElement from './toMatchElement'
import { getContext } from '../utils'

async function toClick(instance, selector, options) {
  const { page } = await getContext(instance, () => document)

  await toMatchElement(instance, selector, options)
  await page.evaluate((selector) => document.querySelector(selector).click(), selector)
}

export default toClick
