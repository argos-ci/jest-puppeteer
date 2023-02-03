import toMatchElement from "./toMatchElement";

async function toClick(instance, selector, options) {
  const element = await toMatchElement(instance, selector, options);
  await element.click(options);
}

export default toClick;
