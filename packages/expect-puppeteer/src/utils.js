export const getPuppeteerType = instance => {
  if (
    instance &&
    instance.constructor &&
    instance.constructor.name &&
    ['Page', 'ElementHandle'].includes(instance.constructor.name) &&
    instance.$
  ) {
    return instance.constructor.name
  }

  return null
}

export const getContext = async (instance, pageFunction) => {
  const type = getPuppeteerType(instance)
  switch (type) {
    case 'Page':
      return {
        page: instance,
        handle: await instance.evaluateHandle(pageFunction),
      }
    case 'ElementHandle': {
      const executionContext = await instance.executionContext()
      return {
        page: await executionContext.frame(),
        handle: instance,
      }
    }
    default:
      throw new Error(`${type} is not implemented`)
  }
}

export const enhanceError = (error, message) => {
  error.message = `${message}\n${error.message}`
  return error
}
