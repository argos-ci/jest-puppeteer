import { getContext, enhanceError } from "../utils";
import { defaultOptions } from "../options";

async function notToMatchElement(
  instance,
  selector,
  { text, ...options } = {}
) {
  options = defaultOptions(options);

  const { page, handle } = await getContext(instance, () => document);

  try {
    await page.waitForFunction(
      (handle, selector, text) => {
        const elements = handle.querySelectorAll(selector);
        if (text !== undefined) {
          return [...elements].every(
            ({ textContent }) => !textContent.match(text)
          );
        }

        return elements.length === 0;
      },
      options,
      handle,
      selector,
      text
    );
  } catch (error) {
    throw enhanceError(
      error,
      `Element ${selector}${
        text !== undefined ? ` (text: "${text}") ` : " "
      }found`
    );
  }
}

export default notToMatchElement;
