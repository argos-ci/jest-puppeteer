import toMatchElement from "./toMatchElement";

async function selectAll(element) {
  // modified from https://github.com/microsoft/playwright/issues/849#issuecomment-587983363
  await element.evaluate((elementHandle) => {
    if (elementHandle.setSelectionRange) {
      try {
        elementHandle.setSelectionRange(0, elementHandle.value.length);
      } catch (e) {
        // setSelectionRange throws an error for inputs: number/date/time/etc
        // we can just focus them and the content will be selected
        elementHandle.focus();
        elementHandle.select();
      }
    } else if (window.getSelection && document.createRange) {
      const range = document.createRange();
      range.selectNodeContents(elementHandle);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  });
}

async function toFill(instance, selector, value, options) {
  const { delay, ...toMatchElementOptions } = options || {};
  const element = await toMatchElement(
    instance,
    selector,
    toMatchElementOptions
  );
  await selectAll(element);
  await element.press("Delete");
  await element.type(value, {
    delay,
  });
}

export default toFill;
