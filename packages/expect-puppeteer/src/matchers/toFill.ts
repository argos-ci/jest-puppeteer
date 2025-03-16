import type { ElementHandle } from "puppeteer";
import { PuppeteerInstance, Selector } from "../utils";
import { toMatchElement, ToMatchElementOptions } from "./toMatchElement";

async function selectAll(element: ElementHandle<Element>) {
  // modified from https://github.com/microsoft/playwright/issues/849#issuecomment-587983363
  await element.evaluate((element) => {
    if (
      !(
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
      )
    ) {
      throw new Error(`Element is not an <input> element.`);
    }

    if (element.setSelectionRange) {
      try {
        element.setSelectionRange(0, element.value.length);
      } catch {
        // setSelectionRange throws an error for inputs: number/date/time/etc
        // we can just focus them and the content will be selected
        element.focus();
        element.select();
      }
    } else if (window.getSelection && document.createRange) {
      const range = document.createRange();
      range.selectNodeContents(element);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  });
}

export type ToFillOptions = ToMatchElementOptions & {
  delay?: number;
};

export async function toFill(
  instance: PuppeteerInstance,
  selector: Selector | string,
  value: string,
  options: ToFillOptions = {},
) {
  const { delay, ...toMatchElementOptions } = options;
  const element = await toMatchElement(
    instance,
    selector,
    toMatchElementOptions,
  );
  await selectAll(element);
  await element.press("Delete");
  await element.type(value, delay ? { delay } : undefined);
}
