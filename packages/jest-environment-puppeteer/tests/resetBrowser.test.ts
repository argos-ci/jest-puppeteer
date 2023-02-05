describe("resetBrowser", () => {
  test("should reset browser", async () => {
    const oldBrowser = browser;
    await jestPuppeteer.resetBrowser();
    expect(browser).not.toBe(oldBrowser);
    expect(browser.isConnected()).toBe(true);
    expect(oldBrowser.isConnected()).toBe(false);
  });
});
