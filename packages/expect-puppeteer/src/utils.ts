import type { Page, Frame, ElementHandle } from "puppeteer";

export type PuppeteerInstance = Page | Frame | ElementHandle;

export type Selector = {
  type: "css" | "xpath";
  value: string;
};

export const checkIsPuppeteerInstance = (
  instance: unknown,
): instance is PuppeteerInstance => {
  return Boolean(
    instance?.constructor?.name &&
      typeof instance === "object" &&
      "$" in instance,
  );
};

export const checkIsPage = (instance: unknown): instance is Page => {
  return (
    checkIsPuppeteerInstance(instance) &&
    (instance?.constructor?.name === "CDPPage" ||
      instance?.constructor?.name === "CdpPage")
  );
};

export const checkIsFrame = (instance: unknown): instance is Frame => {
  return (
    checkIsPuppeteerInstance(instance) &&
    (instance?.constructor?.name === "CDPFrame" ||
      instance?.constructor?.name === "CdpFrame" ||
      instance?.constructor?.name === "Frame")
  );
};

export const checkIsElementHandle = (
  instance: unknown,
): instance is ElementHandle => {
  return (
    checkIsPuppeteerInstance(instance) &&
    (instance?.constructor?.name === "CDPElementHandle" ||
      instance?.constructor?.name === "CdpElementHandle")
  );
};

export const getContext = async (
  instance: PuppeteerInstance,
  pageFunction: () => Document | Element,
) => {
  if (checkIsFrame(instance) || checkIsPage(instance)) {
    return {
      page: instance,
      handle: await instance.evaluateHandle(pageFunction),
    };
  }
  if (checkIsElementHandle(instance)) {
    return {
      page: instance.frame,
      handle: instance,
    };
  }
  throw new Error(`instance is not a valid Puppeteer instance`);
};

export const enhanceError = (error: Error, message: string) => {
  error.message = `${message}\n${error.message}`;
  return error;
};

const checkIsRegexp = (input: unknown): input is RegExp =>
  Object.prototype.toString.call(input) === "[object RegExp]";

const serializeRegexp = (regexp: RegExp) => {
  return regexp.toString();
};

export type SearchExpression = RegExp | string | undefined;

export type SerializedSearchExpression = {
  text: string | null;
  regexp: string | null;
};

export const serializeSearchExpression = (
  expr: SearchExpression,
): SerializedSearchExpression => {
  if (checkIsRegexp(expr)) {
    return { text: null, regexp: serializeRegexp(expr) };
  }
  if (typeof expr === "string") {
    return { text: expr, regexp: null };
  }
  return { text: null, regexp: null };
};

export const resolveSelector = (selector: string | Selector): Selector => {
  return typeof selector === "string"
    ? { type: "css", value: selector }
    : selector;
};

export const getSelectorMessage = (
  selector: Selector,
  text?: string | RegExp | undefined,
): string => {
  return `Element ${selector.value}${text ? ` (text: "${text}")` : ""}`;
};

export const evaluateParseSearchExpression = (page: Page | Frame) => {
  return page.evaluateHandle(() => (expr: SerializedSearchExpression) => {
    const sanitizeForSearch = (text: string) => {
      return text.replace(/\s+/g, " ").trim();
    };

    const parseRegexp = (regexp: string) => {
      const match = regexp.match(/^\/(.*)\/([gimuy]*)$/);
      if (!match) {
        throw new Error(`Invalid regexp: ${regexp}`);
      }
      return new RegExp(match[1], match[2]);
    };

    const { text, regexp } = expr;
    if (text) {
      return (value: string) => sanitizeForSearch(value).includes(text);
    }
    if (regexp) {
      const regexpInstance = parseRegexp(regexp);
      return (value: string) => regexpInstance.test(sanitizeForSearch(value));
    }
    return null;
  });
};
