import { PuppeteerInstance, Selector } from "../utils";
import { toFill, ToFillOptions } from "./toFill";
import { toMatchElement, ToMatchElementOptions } from "./toMatchElement";

export type ToFillFormOptions = ToFillOptions & ToMatchElementOptions;

export async function toFillForm(
  instance: PuppeteerInstance,
  selector: Selector | string,
  values: Record<string, string>,
  options: ToFillFormOptions = {},
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { delay, ...otherOptions } = options;
  const form = await toMatchElement(instance, selector, otherOptions);

  for (const name of Object.keys(values)) {
    await toFill(form, `[name="${name}"]`, values[name], options);
  }
}
