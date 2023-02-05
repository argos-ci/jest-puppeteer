import {
  enhanceError,
  PuppeteerInstance,
  Selector,
  resolveSelector,
  getSelectorMessage,
} from "../utils";
import type { ElementHandle } from "puppeteer";
import { defaultOptions, Options } from "../options";
import { getElementFactory, GetElementOptions } from "./getElementFactory";

export type ToMatchElementOptions = GetElementOptions & Options;

export async function toMatchElement(
  instance: PuppeteerInstance,
  selector: Selector | string,
  options: ToMatchElementOptions = {}
) {
  const { text, visible, ...otherOptions } = options;
  const frameOptions = defaultOptions(otherOptions);
  const rSelector = resolveSelector(selector);

  const [getElement, getElementArgs, ctx] = await getElementFactory(
    instance,
    rSelector,
    { text, visible }
  );

  try {
    await ctx.page.waitForFunction(
      getElement,
      frameOptions,
      ...getElementArgs,
      "positive" as const
    );
  } catch (error: any) {
    throw enhanceError(
      error,
      `${getSelectorMessage(rSelector, text)} not found`
    );
  }

  const jsHandle = await ctx.page.evaluateHandle(
    getElement,
    ...getElementArgs,
    "element" as const
  );
  return jsHandle.asElement() as ElementHandle<Element>;
}
