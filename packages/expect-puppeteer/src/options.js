let defaultOptionsValue = { timeout: 500 };

export const setDefaultOptions = (options) => {
  defaultOptionsValue = options;
};

export const getDefaultOptions = () => {
  if (
    global.puppeteerConfig &&
    ((global.puppeteerConfig.launch && global.puppeteerConfig.launch.slowMo) ||
      (global.puppeteerConfig.connect &&
        global.puppeteerConfig.connect.slowMo)) &&
    defaultOptionsValue &&
    defaultOptionsValue.timeout
  ) {
    return {
      ...defaultOptionsValue,
      // Multiplying slowMo by 10 is just arbitrary
      // slowMo is applied on all Puppeteer internal methods, so it is just a "slow" indicator
      // we can't use it as a real value
      timeout:
        defaultOptionsValue.timeout + global.puppeteerConfig.launch.slowMo * 10,
    };
  }

  return defaultOptionsValue;
};

export const defaultOptions = (options) => ({
  ...getDefaultOptions(),
  ...options,
});
