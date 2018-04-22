let defaultOptionsValue = { timeout: 500 }

export const setDefaultOptions = options => {
  defaultOptionsValue = options
}

export const getDefaultOptions = () => defaultOptionsValue

export const defaultOptions = options => ({
  ...defaultOptionsValue,
  ...options,
})
