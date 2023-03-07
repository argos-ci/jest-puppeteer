describe("browserContext", () => {
  const test = process.env.INCOGNITO ? it : it.skip;
  test("incognito should isolate cookies (part 2)", async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
    expect(await page.cookies()).toEqual([]);
    await page.setCookie({ name: "isolation-test", value: "dummy" });
  });
});
