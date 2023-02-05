/* eslint-disable no-restricted-syntax */
import { toMatchElement, ToMatchElementOptions } from "./toMatchElement";
import { PuppeteerInstance, resolveSelector, Selector } from "../utils";
import type { ElementHandle } from "puppeteer";

const checkIsSelectElement = (
  element: ElementHandle<Element>
): element is ElementHandle<HTMLSelectElement> => {
  return typeof element.select === "function";
};

export async function toSelect(
  instance: PuppeteerInstance,
  selector: Selector | string,
  valueOrText: string,
  options: ToMatchElementOptions = {}
) {
  const element = await toMatchElement(instance, selector, options);

  if (!checkIsSelectElement(element)) {
    throw new Error(`Element is not a <select> element.`);
  }

  const optionElements = await element.$$("option");

  const optionsAttributes = await Promise.all(
    optionElements.map(async (option) => {
      const textContentProperty = await option.getProperty("textContent");
      const valueProperty = await option.getProperty("value");
      return {
        value: await valueProperty.jsonValue(),
        textContent: await textContentProperty.jsonValue(),
      };
    })
  );

  const option = optionsAttributes.find(
    ({ value, textContent }) =>
      value === valueOrText || textContent === valueOrText
  );

  if (!option) {
    throw new Error(
      `Option not found "${resolveSelector(selector).value}" ("${valueOrText}")`
    );
  }
  await element.select(option.value);
}
