import {
  getContext,
  serializeSearchExpression,
  PuppeteerInstance,
  SearchExpression,
  evaluateParseSearchExpression,
} from "../utils";
import { defaultOptions, Options } from "../options";

export type MatchTextContentOptions = Options & {
  traverseShadowRoots?: boolean;
};

export async function matchTextContent(
  instance: PuppeteerInstance,
  matcher: SearchExpression,
  options: MatchTextContentOptions,
  type: "positive" | "negative",
) {
  const { traverseShadowRoots = false, ...otherOptions } = options;
  const frameOptions = defaultOptions(otherOptions);

  const ctx = await getContext(instance, () => document.body);

  const { text, regexp } = serializeSearchExpression(matcher);

  const parseSearchExpressionHandle = await evaluateParseSearchExpression(
    ctx.page,
  );

  await ctx.page.waitForFunction(
    (
      handle,
      text,
      regexp,
      traverseShadowRoots,
      parseSearchExpression,
      type,
    ) => {
      const checkNodeIsElement = (node: Node): node is Element => {
        return node.nodeType === Node.ELEMENT_NODE;
      };

      const checkNodeIsText = (node: Node): node is Element => {
        return node.nodeType === Node.TEXT_NODE;
      };

      const checkIsHtmlSlotElement = (node: Node): node is HTMLSlotElement => {
        return node.nodeType === Node.ELEMENT_NODE && node.nodeName === "SLOT";
      };

      function getShadowTextContent(node: Node) {
        const walker = document.createTreeWalker(
          node,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        );
        let result = "";
        let currentNode = walker.nextNode();
        while (currentNode) {
          if (checkNodeIsText(currentNode)) {
            result += currentNode.textContent;
          } else if (checkNodeIsElement(currentNode)) {
            if (currentNode.assignedSlot) {
              // Skip everything within this subtree, since it's assigned to a slot in the shadow DOM.
              const nodeWithAssignedSlot = currentNode;
              while (
                currentNode === nodeWithAssignedSlot ||
                nodeWithAssignedSlot.contains(currentNode)
              ) {
                currentNode = walker.nextNode();
              }
              // eslint-disable-next-line no-continue
              continue;
            } else if (currentNode.shadowRoot) {
              result += getShadowTextContent(currentNode.shadowRoot);
            } else if (checkIsHtmlSlotElement(currentNode)) {
              const assignedNodes = currentNode.assignedNodes();
              assignedNodes.forEach((node) => {
                result += getShadowTextContent(node);
              });
            }
          }
          currentNode = walker.nextNode();
        }
        return result;
      }

      if (!handle) return false;

      const textContent = traverseShadowRoots
        ? getShadowTextContent(handle)
        : handle.textContent;

      const matcher = parseSearchExpression({ text, regexp });
      if (!matcher) {
        throw new Error(`Invalid ${type} matcher: "${text}" or "${regexp}".`);
      }
      switch (type) {
        case "positive":
          return Boolean(textContent && matcher(textContent));
        case "negative":
          return Boolean(!textContent || !matcher(textContent));
        default:
          throw new Error(`Invalid type: "${type}".`);
      }
    },
    frameOptions,
    ctx.handle,
    text,
    regexp,
    traverseShadowRoots,
    parseSearchExpressionHandle,
    type,
  );
}
