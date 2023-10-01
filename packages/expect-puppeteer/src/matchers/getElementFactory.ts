import {
  getContext,
  PuppeteerInstance,
  Selector,
  serializeSearchExpression,
  evaluateParseSearchExpression,
  SerializedSearchExpression,
} from "../utils";

export type GetElementOptions = {
  text?: string | RegExp;
  visible?: boolean;
};

export async function getElementFactory(
  instance: PuppeteerInstance,
  selector: Selector,
  options: GetElementOptions,
) {
  const { text: searchExpr, visible = false } = options;

  const ctx = await getContext(instance, () => document);

  const { text, regexp } = serializeSearchExpression(searchExpr);

  const parseSearchExpressionHandle = await evaluateParseSearchExpression(
    ctx.page,
  );

  const getElementArgs = [
    ctx.handle,
    selector,
    text,
    regexp,
    visible,
    parseSearchExpressionHandle,
  ] as const;

  const getElement = (
    handle: Element | Document,
    selector: Selector,
    text: string | null,
    regexp: string | null,
    visible: boolean,
    parseSearchExpression: (
      expr: SerializedSearchExpression,
    ) => ((value: string) => boolean) | null,
    type: "element" | "positive" | "negative",
  ) => {
    const hasVisibleBoundingBox = (element: Element): boolean => {
      const rect = element.getBoundingClientRect();
      return !!(rect.top || rect.bottom || rect.width || rect.height);
    };

    const checkNodeIsElement = (node: Node): node is Element => {
      return node.nodeType === Node.ELEMENT_NODE;
    };

    const checkIsElementVisible = (element: Element) => {
      const style = window.getComputedStyle(element);
      return style?.visibility !== "hidden" && hasVisibleBoundingBox(element);
    };

    let elements: Element[] = [];
    switch (selector.type) {
      case "xpath": {
        const results = document.evaluate(selector.value, handle);
        let node = results.iterateNext();
        while (node) {
          if (checkNodeIsElement(node)) {
            elements.push(node);
          }
          node = results.iterateNext();
        }
        break;
      }
      case "css":
        elements = Array.from(handle.querySelectorAll(selector.value));
        break;
      default:
        throw new Error(`${selector.type} is not implemented`);
    }

    elements = visible ? elements.filter(checkIsElementVisible) : elements;

    const matcher = parseSearchExpression({ text, regexp });
    const element = matcher
      ? elements.find(({ textContent }) => textContent && matcher(textContent))
      : elements[0];

    switch (type) {
      case "element":
        return element;
      case "positive":
        return !!element;
      case "negative":
        return !element;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  };

  return [getElement, getElementArgs, ctx] as const;
}
