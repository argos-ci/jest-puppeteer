// import {
//   getContext,
//   enhanceError,
//   PuppeteerInstance,
//   Selector,
// } from "../utils";
// import { defaultOptions, Options } from "../options";

import { defaultOptions, Options } from "../options";
import {
  enhanceError,
  getSelectorMessage,
  PuppeteerInstance,
  resolveSelector,
  Selector,
} from "../utils";
import { getElementFactory, GetElementOptions } from "./getElementFactory";

export type NotToMatchElementOptions = GetElementOptions & Options;

export async function notToMatchElement(
  instance: PuppeteerInstance,
  selector: Selector | string,
  options: NotToMatchElementOptions = {},
) {
  const { text, visible, ...otherOptions } = options;
  const frameOptions = defaultOptions(otherOptions);
  const rSelector = resolveSelector(selector);
  const [getElement, getElementArgs, ctx] = await getElementFactory(
    instance,
    rSelector,
    { text, visible },
  );

  try {
    await ctx.page.waitForFunction(
      getElement,
      frameOptions,
      ...getElementArgs,
      "negative" as const,
    );
  } catch (error: any) {
    throw enhanceError(error, `${getSelectorMessage(rSelector, text)} found`);
  }
}
