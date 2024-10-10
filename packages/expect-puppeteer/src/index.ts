// import modules
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
import {
  checkIsPuppeteerInstance,
  checkIsElementHandle,
  checkIsFrame,
  checkIsPage,
} from "./utils";

// import interfaces and types
import type { JestExpect } from "@jest/expect";
import type { ElementHandle, Frame, Page } from "puppeteer";
import type { PuppeteerInstance } from "./utils";

// reexport
export { setDefaultOptions, getDefaultOptions } from "./options";

// ---------------------------

// declare native matcher function signature
type PuppeteerMatcher<T> = (page: T, ...args: unknown[]) => Promise<unknown>;

// return intersection type from union type
type Intersection<T> = (T extends unknown ? (k: T) => void : never) extends (
  k: infer R,
) => void
  ? R
  : never;

// declare wrapped matcher function signature
type Wrapper<T> = T extends (
  page: Intersection<PuppeteerInstance>,
  ...args: infer A
) => infer R
  ? (...args: A) => R
  : never;

// declare matchers list
type PuppeteerMatchers<T> = T extends PuppeteerInstance
  ? {
      // common
      toClick: Wrapper<typeof toClick>;
      toFill: Wrapper<typeof toFill>;
      toFillForm: Wrapper<typeof toFillForm>;
      toMatchTextContent: Wrapper<typeof toMatchTextContent>;
      toMatchElement: Wrapper<typeof toMatchElement>;
      toSelect: Wrapper<typeof toSelect>;
      toUploadFile: Wrapper<typeof toUploadFile>;
      // inverse matchers
      not: {
        toMatchTextContent: Wrapper<typeof notToMatchTextContent>;
        toMatchElement: Wrapper<typeof notToMatchElement>;
      };
    }
  : never;

// declare page matchers list
interface PageMatchers extends PuppeteerMatchers<Page> {
  // instance specific
  toDisplayDialog: Wrapper<typeof toDisplayDialog>;
  // inverse matchers
  not: PuppeteerMatchers<Page>[`not`] & {};
}

// declare frame matchers list
interface FrameMatchers extends PuppeteerMatchers<Frame> {
  // inverse matchers
  not: PuppeteerMatchers<Frame>[`not`] & {};
}

// declare element matchers list
interface ElementHandleMatchers
  extends PuppeteerMatchers<ElementHandle<Element>> {
  // inverse matchers
  not: PuppeteerMatchers<ElementHandle<Element>>[`not`] & {};
}

// declare matchers per instance type
type PMatchersPerType<T> = T extends Page
  ? PageMatchers
  : T extends Frame
    ? FrameMatchers
    : T extends ElementHandle<Element>
      ? ElementHandleMatchers
      : never;

// constraint current expect to support puppeteer matchers
export interface PuppeteerExpect {
  <T>(actual: T): PMatchersPerType<T>;
}

// global object signature
type GlobalWithExpect = typeof globalThis & { expect: PuppeteerExpect };

// ---------------------------

// extend global jest object
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      // common
      toClick: T extends PuppeteerInstance ? Wrapper<typeof toClick> : never;
      toFill: T extends PuppeteerInstance ? Wrapper<typeof toFill> : never;
      toFillForm: T extends PuppeteerInstance
        ? Wrapper<typeof toFillForm>
        : never;
      toMatchTextContent: T extends PuppeteerInstance
        ? Wrapper<typeof toMatchTextContent>
        : never;
      toMatchElement: T extends PuppeteerInstance
        ? Wrapper<typeof toMatchElement>
        : never;
      toSelect: T extends PuppeteerInstance ? Wrapper<typeof toSelect> : never;
      toUploadFile: T extends PuppeteerInstance
        ? Wrapper<typeof toUploadFile>
        : never;
      // page
      toDisplayDialog: T extends Page ? Wrapper<typeof toDisplayDialog> : never;
      // inverse matchers
      not: {
        toMatchTextContent: T extends PuppeteerInstance
          ? Wrapper<typeof notToMatchTextContent>
          : never;
        toMatchElement: T extends PuppeteerInstance
          ? Wrapper<typeof notToMatchElement>
          : never;
      };
    }
  }
}

// ---------------------------
// @ts-expect-error global node object w/ initial jest expect prop attached
const jestExpect = global.expect as JestExpect;

// ---------------------------
// wrapper executing the matcher and capturing the stack trace on error before rethrowing
const wrapMatcher = <T extends PuppeteerInstance>(
  matcher: PuppeteerMatcher<T>,
  instance: T,
) =>
  async function throwingMatcher(...args: unknown[]): Promise<unknown> {
    // ???
    jestExpect.getState().assertionCalls += 1;
    try {
      // run async matcher
      const result = await matcher(instance, ...args);
      // resolve
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) Error.captureStackTrace(err, throwingMatcher);
      // reject
      throw err;
    }
  } as Wrapper<PuppeteerMatcher<T>>;

// ---------------------------
// create the generic expect object and bind wrapped matchers to it
const puppeteerExpect = <T extends PuppeteerInstance>(instance: T) => {
  // read instance type
  const [isPage, isFrame, isHandle] = [
    checkIsPage(instance),
    checkIsFrame(instance),
    checkIsElementHandle(instance),
  ];

  if (!isPage && !isFrame && !isHandle)
    throw new Error(`${instance} is not supported`);

  // retrieve matchers
  const expectation = {
    // common
    toClick: wrapMatcher(toClick as PuppeteerMatcher<T>, instance),
    toFill: wrapMatcher(toFill as PuppeteerMatcher<T>, instance),
    toFillForm: wrapMatcher(toFillForm as PuppeteerMatcher<T>, instance),
    toMatchTextContent: wrapMatcher(
      toMatchTextContent as PuppeteerMatcher<T>,
      instance,
    ),
    toMatchElement: wrapMatcher(
      toMatchElement as PuppeteerMatcher<T>,
      instance,
    ),
    toSelect: wrapMatcher(toSelect as PuppeteerMatcher<T>, instance),
    toUploadFile: wrapMatcher(toUploadFile as PuppeteerMatcher<T>, instance),
    // page
    toDisplayDialog: isPage
      ? wrapMatcher(toDisplayDialog as PuppeteerMatcher<T>, instance)
      : undefined,
    // inverse matchers
    not: {
      toMatchTextContent: wrapMatcher(
        notToMatchTextContent as PuppeteerMatcher<T>,
        instance,
      ),
      toMatchElement: wrapMatcher(
        notToMatchElement as PuppeteerMatcher<T>,
        instance,
      ),
    },
  };

  return expectation as unknown as PMatchersPerType<T>;
};

// ---------------------------
// merge puppeteer matchers w/ jest matchers and return a new object
const expectPuppeteer = (<T>(actual: T) => {
  // puppeteer
  if (checkIsPuppeteerInstance(actual)) {
    const matchers = puppeteerExpect(actual);
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

  // not puppeteer (fall back to jest defaults, puppeteer matchers not available)
  return jestExpect(actual);
}) as PuppeteerExpect & JestExpect;

Object.keys(jestExpect).forEach((prop) => {
  // @ts-expect-error add jest expect properties to expect-puppeteer implementation
  expectPuppeteer[prop] = jestExpect[prop];
});

export { expectPuppeteer as expect };

// replace jest expect by expect-puppeteer ...
if (typeof (global as GlobalWithExpect).expect !== `undefined`)
  (global as GlobalWithExpect).expect = expectPuppeteer;
