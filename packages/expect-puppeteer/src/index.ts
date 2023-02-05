/* eslint-disable no-use-before-define, no-restricted-syntax, no-await-in-loop */
import {
  checkIsPuppeteerInstance,
  checkIsElementHandle,
  checkIsFrame,
  checkIsPage,
  PuppeteerInstance,
} from "./utils";
import { jestExpect, JestExpect } from "@jest/expect";
import { notToMatchTextContent } from "./matchers/notToMatchTextContent";
import { notToMatchElement } from "./matchers/notToMatchElement";
import { toClick } from "./matchers/toClick";
import { toDisplayDialog } from "./matchers/toDisplayDialog";
import { toFill } from "./matchers/toFill";
import { toFillForm } from "./matchers/toFillForm";
import { toMatchTextContent } from "./matchers/toMatchTextContent";
import { toMatchElement } from "./matchers/toMatchElement";
import { toSelect } from "./matchers/toSelect";
import { toUploadFile } from "./matchers/toUploadFile";
import type { ElementHandle, Frame, Page } from "puppeteer";

export { setDefaultOptions, getDefaultOptions } from "./options";

export type Matcher<TPage extends PuppeteerInstance, TResult = any> = (
  page: TPage,
  ...args: any[]
) => Promise<TResult>;

export interface MatcherSet<TPage extends PuppeteerInstance> {
  positive: Record<string, Matcher<TPage>>;
  negative: Record<string, Matcher<TPage>>;
}

const frameMatchers = {
  positive: {
    toClick,
    toFill,
    toFillForm,
    toMatchTextContent,
    toMatchElement,
    toSelect,
    toUploadFile,
  },
  negative: {
    toMatchTextContent: notToMatchTextContent,
    toMatchElement: notToMatchElement,
  },
} satisfies MatcherSet<Frame>;

type FrameMatchers = typeof frameMatchers;

const pageMatchers = {
  positive: {
    toClick,
    toDisplayDialog,
    toFill,
    toFillForm,
    toMatchTextContent,
    toMatchElement,
    toSelect,
    toUploadFile,
  },
  negative: {
    toMatchTextContent: notToMatchTextContent,
    toMatchElement: notToMatchElement,
  },
} satisfies MatcherSet<Page>;

type PageMatchers = typeof pageMatchers;

const elementHandleMatchers = {
  positive: {
    toClick,
    toFill,
    toFillForm,
    toMatchTextContent,
    toMatchElement,
    toSelect,
    toUploadFile,
  },
  negative: {
    toMatchTextContent: notToMatchTextContent,
    toMatchElement: notToMatchElement,
  },
} satisfies MatcherSet<ElementHandle>;

type ElementHandleMatchers = typeof elementHandleMatchers;

type MatchersFromSet<TSet extends MatcherSet<any>> = TSet["positive"] & {
  not: TSet["negative"];
};

export type PuppeteerMatchers =
  | MatchersFromSet<FrameMatchers>
  | MatchersFromSet<PageMatchers>
  | MatchersFromSet<ElementHandleMatchers>;

const wrapMatcher = <TPage extends PuppeteerInstance>(
  matcher: Matcher<TPage>,
  instance: PuppeteerInstance
) => {
  return async function throwingMatcher(...args: any[]) {
    jestExpect.getState().assertionCalls += 1;

    try {
      return await matcher(instance as TPage, ...args);
    } catch (error: any) {
      Error.captureStackTrace(error, throwingMatcher);
      throw error;
    }
  };
};

const createExpect = <T extends PuppeteerInstance>(
  instance: T,
  matchers: MatcherSet<T>
) => {
  const expectation = {
    not: {} as Record<string, any>,
  } as Record<string, any>;

  Object.keys(matchers.positive).forEach((key) => {
    expectation[key] = wrapMatcher(matchers.positive[key], instance);
  });

  Object.keys(matchers.negative).forEach((key) => {
    expectation.not[key] = wrapMatcher(matchers.negative[key], instance);
  });

  return expectation;
};

const expectPuppeteerInstance = <TInstance extends PuppeteerInstance>(
  actual: TInstance
): PuppeteerMatchers => {
  if (checkIsPage(actual)) {
    return createExpect(actual, pageMatchers) as PuppeteerMatchers;
  }
  if (checkIsFrame(actual)) {
    return createExpect(actual, frameMatchers) as PuppeteerMatchers;
  }
  if (checkIsElementHandle(actual)) {
    return createExpect(actual, elementHandleMatchers) as PuppeteerMatchers;
  }
  throw new Error(`${actual} is not supported`);
};

const expectPuppeteer = (<T>(actual: T) => {
  if (checkIsPuppeteerInstance(actual)) {
    const matchers = expectPuppeteerInstance(actual);
    const jestMatchers = jestExpect(actual);
    return {
      ...jestMatchers,
      ...matchers,
      not: {
        ...jestMatchers.not,
        ...matchers.not,
      },
    };
  }

  return jestExpect(actual);
}) as JestExpect;

Object.keys(jestExpect).forEach((prop) => {
  // @ts-ignore
  expectPuppeteer[prop] = jestExpect[prop];
});

export { expectPuppeteer as expect };

type MatcherType<T> = T extends (
  instance: any,
  ...args: infer TArgs
) => infer TRet
  ? (...args: TArgs) => TRet
  : never;

declare global {
  namespace jest {
    interface Matchers<R> {
      toClick: MatcherType<typeof toClick>;
      toFill: MatcherType<typeof toFill>;
      toFillForm: MatcherType<typeof toFillForm>;
      toMatchTextContent: MatcherType<typeof toMatchTextContent>;
      toMatchElement: MatcherType<typeof toMatchElement>;
      toSelect: MatcherType<typeof toSelect>;
      toUploadFile: MatcherType<typeof toUploadFile>;
      toDisplayDialog: MatcherType<typeof toDisplayDialog>;
    }
  }
}

type GlobalWithExpect = typeof globalThis & { expect: any };

const globalWithExpect = global as GlobalWithExpect;

if (typeof globalWithExpect.expect !== "undefined") {
  globalWithExpect.expect = expectPuppeteer;
}
