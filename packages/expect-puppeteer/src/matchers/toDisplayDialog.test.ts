describe("toDisplayDialog", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  it("should handle dialog", async () => {
    const dialog = await expect(page).toDisplayDialog(async () => {
      await page.click("#dialog-btn");
    });
    expect(dialog.message()).toBe("Bouh!");
    await dialog.accept();
  });
});
