/* eslint-disable no-restricted-syntax */
import toMatchElement from './toMatchElement'

function select(page, element, value) {
  return page.evaluate(
    (element, value) => {
      if (element.nodeName.toLowerCase() !== 'select')
        throw new Error('Element is not a <select> element.')

      const options = Array.from(element.options)
      element.value = undefined
      for (const option of options) {
        option.selected = value === option.value
        if (option.selected && !element.multiple) break
      }
      element.dispatchEvent(new Event('input', { bubbles: true }))
      element.dispatchEvent(new Event('change', { bubbles: true }))
      return options
        .filter(option => option.selected)
        .map(option => option.value)
    },
    element,
    value,
  )
}

async function toSelect(instance, selector, valueOrText, options) {
  const element = await (0, _toMatchElement2.default)(instance, selector, options);
  const result = await instance.evaluate((element, value) => {
    if (element.nodeName.toLowerCase() !== 'select') 
      throw new Error('Element is not a <select> element.');

    const options = Array.from(element.options);
    element.value = undefined;
    for (const option of options) {
        option.selected = String(value) === option.value || String(value) === option.innerText;
        if (option.selected) {
          element.dispatchEvent(new Event('input', { bubbles: true }));
          element.dispatchEvent(new Event('change', { bubbles: true }));
          return true;
        }
    }
    return false;
  }, element, valueOrText);

  if (false === result) {
      throw new Error(`Option with value or text ("${valueOrText}") was not found in "${selector}" `);
  }
}

export default toSelect
