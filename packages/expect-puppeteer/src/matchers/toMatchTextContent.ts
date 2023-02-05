import { enhanceError, PuppeteerInstance, SearchExpression } from "../utils";
import { matchTextContent, MatchTextContentOptions } from "./matchTextContent";

export type ToMatchOptions = MatchTextContentOptions;

export async function toMatchTextContent(
  instance: PuppeteerInstance,
  matcher: SearchExpression,
  options: ToMatchOptions = {}
) {
  try {
    await matchTextContent(instance, matcher, options, "positive");
  } catch (error: any) {
    throw enhanceError(error, `Text not found "${matcher}"`);
  }
}
