describe("runBeforeUnloadOnClose", () => {
  it("shouldn’t call page.close with runBeforeUnload by default", async () => {
    const closeSpy = jest.spyOn(page, "close");
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
    await jestPuppeteer.resetPage();
    expect(closeSpy).toHaveBeenCalledTimes(1);
    expect(closeSpy).toHaveBeenCalledWith();
  });

  it("should call page.close({ runBeforeUnload: true }) when runBeforeUnloadOnClose is set to true", async () => {
    const closeSpy = jest.spyOn(page, "close");
    global.puppeteerConfig.runBeforeUnloadOnClose = true;
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
    await jestPuppeteer.resetPage();
    expect(closeSpy).toHaveBeenCalledTimes(1);
    expect(closeSpy).toHaveBeenCalledWith({ runBeforeUnload: true });
  });
});
