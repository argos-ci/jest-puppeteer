import toMatchElement from './toMatchElement'

async function toFill(instance, selector, value, options) {
  const element = await toMatchElement(instance, selector, options)
  await element.click({ clickCount: 3 })
  await element.type(value)
}

export default toFill
