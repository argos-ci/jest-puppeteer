/* eslint-disable no-use-before-define, no-restricted-syntax, no-await-in-loop */
import { getPuppeteerType } from "./utils";
import notToMatch from "./matchers/notToMatch";
import notToMatchElement from "./matchers/notToMatchElement";
import toClick from "./matchers/toClick";
import toDisplayDialog from "./matchers/toDisplayDialog";
import toFill from "./matchers/toFill";
import toFillForm from "./matchers/toFillForm";
import toMatch from "./matchers/toMatch";
import toMatchElement from "./matchers/toMatchElement";
import toSelect from "./matchers/toSelect";
import toUploadFile from "./matchers/toUploadFile";

export { setDefaultOptions, getDefaultOptions } from "./options";

const pageMatchers = {
  toClick,
  toDisplayDialog,
  toFill,
  toFillForm,
  toMatch,
  toMatchElement,
  toSelect,
  toUploadFile,
  not: {
    toMatch: notToMatch,
    toMatchElement: notToMatchElement,
  },
};

const elementHandleMatchers = {
  toClick,
  toFill,
  toFillForm,
  toMatch,
  toMatchElement,
  toSelect,
  toUploadFile,
  not: {
    toMatch: notToMatch,
    toMatchElement: notToMatchElement,
  },
};

function createMatcher(matcher, page) {
  return async function throwingMatcher(...args) {
    if (typeof global.expect !== "undefined") {
      global.expect.getState().assertionCalls += 1;
    }

    try {
      return await matcher(page, ...args);
    } catch (error) {
      Error.captureStackTrace(error, throwingMatcher);
      throw error;
    }
  };
}

function internalExpect(type, matchers) {
  const expectation = {
    not: {},
  };

  Object.keys(matchers).forEach((key) => {
    if (key === "not") return;
    expectation[key] = createMatcher(matchers[key], type);
  });

  Object.keys(matchers.not).forEach((key) => {
    expectation.not[key] = createMatcher(matchers.not[key], type);
  });

  return expectation;
}

function expectPuppeteer(actual) {
  const type = getPuppeteerType(actual);
  switch (type) {
    case "CDPPage":
    case "Frame":
      return internalExpect(actual, pageMatchers);
    case "ElementHandle":
      return internalExpect(actual, elementHandleMatchers);
    default:
      throw new Error(`${actual} is not supported`);
  }
}

if (typeof global.expect !== "undefined") {
  const originalExpect = global.expect;
  global.expect = (actual, ...args) => {
    const type = getPuppeteerType(actual);
    if (type) {
      const matchers = expectPuppeteer(actual);
      const jestMatchers = originalExpect(actual, ...args);
      return {
        ...jestMatchers,
        ...matchers,
        not: {
          ...jestMatchers.not,
          ...matchers.not,
        },
      };
    }
    return originalExpect(actual, ...args);
  };
  Object.keys(originalExpect).forEach((prop) => {
    global.expect[prop] = originalExpect[prop];
  });
}
