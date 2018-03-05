async function toMatchText(page, selector, matcher) {
  const element = await page.$(selector);

  if (!element) throw new Error(`Element not found from "${selector}"`);

  const textContentProperty = await element.getProperty('textContent');
  const textJson = await textContentProperty.jsonValue();

  if (!textJson.match(matcher)) throw new Error(`Text not found "${matcher}"`);
}

export default toMatchText;
