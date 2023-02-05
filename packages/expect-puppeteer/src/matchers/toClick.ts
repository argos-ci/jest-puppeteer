import type { ClickOptions } from "puppeteer";
import { PuppeteerInstance, Selector } from "../utils";
import { toMatchElement, ToMatchElementOptions } from "./toMatchElement";

export type ToClickOptions = ToMatchElementOptions & ClickOptions;

export async function toClick(
  instance: PuppeteerInstance,
  selector: Selector | string,
  options: ToClickOptions = {}
) {
  const { delay, button, clickCount, offset, ...otherOptions } = options;
  const element = await toMatchElement(instance, selector, otherOptions);
  await element.click({ delay, button, clickCount, offset });
}
