async function toMatch(handler, matcher, options = { timeout: 500 }) {
  const handlerType = handler.constructor.name;

  if (handlerType === 'ElementHandle') {
    const textContentProperty = await handler.getProperty('textContent');
    const textJson = await textContentProperty.jsonValue();

    if (!textJson.match(matcher)) throw  Error(`Expected to find text: "${matcher}"`);

    return;
  }

  try {
    await page.waitForFunction(
      `document.body && document.body.textContent.match(new RegExp('${matcher}')) !== null`,
      options,
    )
  } catch (error) {
    throw new Error(`Expected to find text: "${matcher}"`)
  }
}

export default toMatch;
