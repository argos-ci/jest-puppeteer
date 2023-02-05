import { enhanceError, PuppeteerInstance, SearchExpression } from "../utils";
import { matchTextContent, MatchTextContentOptions } from "./matchTextContent";

export type NotToMatchOptions = MatchTextContentOptions;

export async function notToMatchTextContent(
  instance: PuppeteerInstance,
  matcher: SearchExpression,
  options: NotToMatchOptions = {}
) {
  try {
    await matchTextContent(instance, matcher, options, "negative");
  } catch (error: any) {
    throw enhanceError(error, `Text found "${matcher}"`);
  }
}
