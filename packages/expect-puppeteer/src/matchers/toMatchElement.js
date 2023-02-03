import { getContext, enhanceError, expandSearchExpr } from "../utils";
import { defaultOptions } from "../options";

async function toMatchElement(
  instance,
  selector,
  { text: searchExpr, visible = false, ...options } = {}
) {
  options = defaultOptions(options);
  selector =
    selector instanceof Object
      ? { ...selector }
      : { type: "css", value: selector };

  const { page, handle } = await getContext(instance, () => document);

  const { text, regexp } = expandSearchExpr(searchExpr);

  const getElement = (handle, selector, text, regexp, visible) => {
    function hasVisibleBoundingBox(element) {
      const rect = element.getBoundingClientRect();
      return !!(rect.top || rect.bottom || rect.width || rect.height);
    }

    const isVisible = (element) => {
      if (visible) {
        const style = window.getComputedStyle(element);
        return (
          style &&
          style.visibility !== "hidden" &&
          hasVisibleBoundingBox(element)
        );
      }

      return true;
    };

    let nodes = [];
    switch (selector.type) {
      case "xpath": {
        const xpathResults = document.evaluate(selector.value, handle);
        let currentXpathResult = xpathResults.iterateNext();

        while (currentXpathResult) {
          nodes.push(currentXpathResult);
          currentXpathResult = xpathResults.iterateNext();
        }
        break;
      }
      case "css":
        nodes = handle.querySelectorAll(selector.value);
        break;
      default:
        throw new Error(`${selector.type} is not implemented`);
    }

    const elements = [...nodes].filter(isVisible);
    if (regexp !== null) {
      const [, pattern, flags] = regexp.match(/\/(.*)\/(.*)?/);
      return elements.find(({ textContent }) =>
        textContent
          .replace(/\s+/g, " ")
          .trim()
          .match(new RegExp(pattern, flags))
      );
    }
    if (text !== null) {
      return elements.find(({ textContent }) =>
        textContent.replace(/\s+/g, " ").trim().includes(text)
      );
    }
    return elements[0];
  };

  try {
    await page.waitForFunction(
      getElement,
      options,
      handle,
      selector,
      text,
      regexp,
      visible
    );
  } catch (error) {
    throw enhanceError(
      error,
      `Element ${selector.value}${
        text !== null || regexp !== null ? ` (text: "${text || regexp}") ` : " "
      }not found`
    );
  }

  const jsHandle = await page.evaluateHandle(
    getElement,
    handle,
    selector,
    text,
    regexp,
    visible
  );
  return jsHandle.asElement();
}

export default toMatchElement;
