// import globals
import "jest-puppeteer";

describe("resetBrowser", () => {
  test("should reset browser", async () => {
    const oldBrowser = browser;
    await jestPuppeteer.resetBrowser();
    expect(browser).not.toBe(oldBrowser);
    expect(browser.connected).toBe(true);
    expect(oldBrowser.connected).toBe(false);
  });
});
