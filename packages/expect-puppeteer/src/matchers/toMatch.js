import { getContext, enhanceError, expandSearchExpr } from "../utils";
import { defaultOptions } from "../options";

async function toMatch(instance, matcher, options) {
  options = defaultOptions(options);
  const { traverseShadowRoots = false } = options;

  const { page, handle } = await getContext(instance, () => document.body);

  const { text, regexp } = expandSearchExpr(matcher);

  try {
    await page.waitForFunction(
      (handle, text, regexp, traverseShadowRoots) => {
        function getShadowTextContent(node) {
          const walker = document.createTreeWalker(
            node,
            // eslint-disable-next-line no-bitwise
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null,
            false
          );
          let result = "";
          let currentNode = walker.nextNode();
          while (currentNode) {
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
            } else if (currentNode.nodeType === Node.TEXT_NODE) {
              result += currentNode.textContent;
            } else if (currentNode.shadowRoot) {
              result += getShadowTextContent(currentNode.shadowRoot);
            } else if (typeof currentNode.assignedNodes === "function") {
              const assignedNodes = currentNode.assignedNodes();
              // eslint-disable-next-line no-loop-func
              assignedNodes.forEach((node) => {
                result += getShadowTextContent(node);
              });
            }
            currentNode = walker.nextNode();
          }
          return result;
        }

        if (!handle) return false;

        const textContent = traverseShadowRoots
          ? getShadowTextContent(handle)
          : handle.textContent;

        if (regexp !== null) {
          const [, pattern, flags] = regexp.match(/\/(.*)\/(.*)?/);
          return (
            textContent
              .replace(/\s+/g, " ")
              .trim()
              .match(new RegExp(pattern, flags)) !== null
          );
        }
        if (text !== null) {
          return textContent.replace(/\s+/g, " ").trim().includes(text);
        }
        return false;
      },
      options,
      handle,
      text,
      regexp,
      traverseShadowRoots
    );
  } catch (error) {
    throw enhanceError(error, `Text not found "${matcher}"`);
  }
}

export default toMatch;
