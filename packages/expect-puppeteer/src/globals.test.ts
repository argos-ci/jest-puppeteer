// import jest globals
import { xdescribe, beforeAll, it, expect } from "@jest/globals";

// import jest-puppeteer globals
import "jest-puppeteer";
import "expect-puppeteer";

// test explicit imports from @jest/globals (incompatible with matchers implementation)
xdescribe("Google", (): void => {
  beforeAll(async (): Promise<void> => {
    await page.goto("https://google.com");
  });

  it('should display "google" text on page', async (): Promise<void> => {
    await expect(page).not.toMatchTextContent("google", {});
  });
});
