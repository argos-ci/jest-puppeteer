import { getContext, enhanceError } from "../utils";
import { defaultOptions } from "../options";

async function notToMatch(instance, matcher, options) {
  options = defaultOptions(options);
  const { traverseShadowRoots = false } = options;

  const { page, handle } = await getContext(instance, () => document.body);

  try {
    await page.waitForFunction(
      (handle, matcher, traverseShadowRoots) => {
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

        return textContent.match(new RegExp(matcher)) === null;
      },
      options,
      handle,
      matcher,
      traverseShadowRoots
    );
  } catch (error) {
    throw enhanceError(error, `Text found "${matcher}"`);
  }
}

export default notToMatch;
