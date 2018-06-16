import toMatchElement from './toMatchElement'

async function toFill(instance, selector, value, options) {
  const { delay, ...toMatchElementOptions } = options || {}
  const element = await toMatchElement(
    instance,
    selector,
    toMatchElementOptions,
  )
  await element.click({ clickCount: 3 })
  await element.type(value, {
    delay,
  })
}

export default toFill
