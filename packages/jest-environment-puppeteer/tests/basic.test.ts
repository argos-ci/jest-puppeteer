describe("Basic", () => {
  beforeAll(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  it('should display "This is home!" text on page', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("This is home!");
  });
});
