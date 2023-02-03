import { defaultOptions } from "../options";
import toFill from "./toFill";
import toMatchElement from "./toMatchElement";

/* eslint-disable no-restricted-syntax, no-await-in-loop */
async function toFillForm(instance, selector, values, options) {
  options = defaultOptions(options);

  const form = await toMatchElement(instance, selector, options);

  for (const name of Object.keys(values)) {
    await toFill(form, `[name="${name}"]`, values[name], options);
  }
}

export default toFillForm;
