// import globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("resetPage", () => {
  test("should reset page", async () => {
    const oldPage = page;
    await jestPuppeteer.resetPage();
    expect(page).not.toBe(oldPage);
    expect(page.isClosed()).toBe(false);
    expect(oldPage.isClosed()).toBe(true);
  });
});
