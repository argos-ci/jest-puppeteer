import type { FrameWaitForFunctionOptions } from "puppeteer";
import { puppeteerConfig } from "jest-environment-puppeteer/globals";

export type Options = FrameWaitForFunctionOptions;

let defaultOptionsValue: Options = { timeout: 500 };

export const setDefaultOptions = (options: Options) => {
  defaultOptionsValue = options;
};

export const getDefaultOptions = (): Options => {
  const slowMo =
    puppeteerConfig?.launch?.slowMo || puppeteerConfig?.connect?.slowMo || 0;
  const defaultTimeout = defaultOptionsValue.timeout || 0;

  if (slowMo || defaultOptionsValue.timeout) {
    return {
      ...defaultOptionsValue,
      // Multiplying slowMo by 10 is just arbitrary
      // slowMo is applied on all Puppeteer internal methods, so it is just a "slow" indicator
      // we can't use it as a real value
      timeout: defaultTimeout + slowMo * 10,
    };
  }

  return defaultOptionsValue;
};

export const defaultOptions = (options: Options): Options => ({
  ...getDefaultOptions(),
  ...options,
});
