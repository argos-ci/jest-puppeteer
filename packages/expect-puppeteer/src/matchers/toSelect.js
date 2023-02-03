/* eslint-disable no-restricted-syntax */
import toMatchElement from "./toMatchElement";
import { getContext } from "../utils";

function select(page, element, value) {
  return page.evaluate(
    (element, value) => {
      if (element.nodeName.toLowerCase() !== "select")
        throw new Error("Element is not a <select> element.");

      const options = Array.from(element.options);
      element.value = undefined;
      for (const option of options) {
        option.selected = value === option.value;
        if (option.selected && !element.multiple) break;
      }
      element.dispatchEvent(new Event("input", { bubbles: true }));
      element.dispatchEvent(new Event("change", { bubbles: true }));
      return options
        .filter((option) => option.selected)
        .map((option) => option.value);
    },
    element,
    value
  );
}

async function toSelect(instance, selector, valueOrText, options) {
  const element = await toMatchElement(instance, selector, options);

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
    throw new Error(`Option not found "${selector}" ("${valueOrText}")`);
  }
  const { page } = await getContext(instance, () => document);
  await select(page, element, option.value);

  // await page.select(selector, foundValue)
  // console.log(select.select)

  // select.select()

  // const foundValue = await select.$$eval(
  //   `${selector} option`,
  //   (options, valueOrText, selector) => {
  //     const option = options.find(
  //       option =>
  //         option.value === valueOrText || option.textContent === valueOrText,
  //     )
  //     if (!option) {
  //       throw new Error(`Option not found "${selector}" ("${valueOrText}")`)
  //     }
  //     return option.value
  //   },
  //   valueOrText,
  //   selector,
  // )
  //
  // await page.select(selector, foundValue)
}

export default toSelect;
