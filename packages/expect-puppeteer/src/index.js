/* eslint-disable no-use-before-define, no-restricted-syntax, no-await-in-loop */
import toMatch from './matchers/toMatch'
import toClick from './matchers/toClick'
import toSelect from './matchers/toSelect'
import toUploadFile from './matchers/toUploadFile'
import toFill from './matchers/toFill'
import toFillForm from './matchers/toFillForm'
import toDisplayDialog from './matchers/toDisplayDialog'
import notToMatch from './matchers/notToMatch'

const matchers = {
  toMatch,
  toClick,
  toSelect,
  toUploadFile,
  toFill,
  toFillForm,
  toDisplayDialog,
  not: {
    toMatch: notToMatch,
  },
}

function createMatcher(matcher, page) {
  return async function throwingMatcher(...args) {
    if (typeof global.expect !== 'undefined') {
      global.expect.getState().assertionCalls += 1
    }

    try {
      return await matcher(page, ...args)
    } catch (error) {
      Error.captureStackTrace(error, createMatcher)
      throw error
    }
  }
}

function expectPage(page) {
  const expectation = {
    not: {},
  }

  Object.keys(matchers).forEach(key => {
    if (key === 'not') return
    expectation[key] = createMatcher(matchers[key], page)
  })

  Object.keys(matchers.not).forEach(key => {
    expectation.not[key] = createMatcher(matchers.not[key], page)
  })

  return expectation
}

function checkConstructorName(type) {
  const constructorTypes = [
    'Frame',
    'Page',
    'JSHandle',
    'ElementHandle',
  ]

  return constructorTypes.includes(type);
};

if (typeof global.expect !== 'undefined') {
  const isPuppeteerHandle = object =>
    Boolean(object && object.constructor && checkConstructorName(object.constructor.name))

  const originalExpect = global.expect
  global.expect = (actual, ...args) => {
    if (isPuppeteerHandle(actual)) {
      return expectPage(actual)
    }
    return originalExpect(actual, ...args)
  }
  Object.keys(originalExpect).forEach(prop => {
    global.expect[prop] = originalExpect[prop]
  })
}

module.exports = expectPage
