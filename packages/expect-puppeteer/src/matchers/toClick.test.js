import path from "path";
import { setupPage } from "./setupPage";

describe("toClick", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (pageType) => {
    let page;
    setupPage(pageType, ({ currentPage }) => {
      page = currentPage;
    });
    it("should click using selector", async () => {
      await expect(page).toClick('a[href="/page2.html"]');
      await page.waitForNavigation();
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using xpath selector", async () => {
      await expect(page).toClick({
        value: '//a[contains(@href,"/page2.html")]',
        type: "xpath",
      });
      await page.waitForNavigation();
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using css selector with object param", async () => {
      await expect(page).toClick({
        value: 'a[href="/page2.html"]',
        type: "css",
      });
      await page.waitForNavigation();
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using text", async () => {
      await expect(page).toClick("a", { text: "Page 2" });
      await page.waitForNavigation();
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using text with xpath selector", async () => {
      await expect(page).toClick(
        {
          value: "//a",
          type: "xpath",
        },
        { text: "Page 2" }
      );
      await page.waitForNavigation();
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using text with css selector", async () => {
      await expect(page).toClick(
        {
          value: "a",
          type: "css",
        },
        { text: "Page 2" }
      );
      await page.waitForNavigation();
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should return an error if element is not found", async () => {
      expect.assertions(3);

      try {
        await expect(page).toClick("a", { text: "Nop" });
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found');
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });

    it("should return an error if element is not found with xpath selector", async () => {
      expect.assertions(3);

      try {
        await expect(page).toClick(
          { value: "//a", type: "xpath" },
          { text: "Nop" }
        );
      } catch (error) {
        expect(error.message).toMatch('Element //a (text: "Nop") not found');
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });

    it("should return an error if element is not found with css selector as object", async () => {
      expect.assertions(3);

      try {
        await expect(page).toClick(
          { value: "a", type: "css" },
          { text: "Nop" }
        );
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found');
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });

  describe("ElementHandle", () => {
    it("should click using selector", async () => {
      const body = await page.$("body");
      await expect(body).toClick('a[href="/page2.html"]');
      await page.waitForSelector("html");
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using xpath selector", async () => {
      const body = await page.$("body");
      await expect(body).toClick({
        value: './/a[contains(@href,"/page2.html")]',
        type: "xpath",
      });
      await page.waitForSelector("html");
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should click using text", async () => {
      const body = await page.$("body");
      await expect(body).toClick("a", { text: "Page 2" });
      await page.waitForSelector("html");
      const pathname = await page.evaluate(() => document.location.pathname);
      expect(pathname).toBe("/page2.html");
    });

    it("should return an error if element is not found", async () => {
      const body = await page.$("body");
      expect.assertions(3);

      try {
        await expect(body).toClick("a", { text: "Nop" });
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found');
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });
});
