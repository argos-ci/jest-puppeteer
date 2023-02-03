import path from "path";
import { setupPage } from "./setupPage";

describe("toSelect", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (pageType) => {
    let page;
    setupPage(pageType, ({ currentPage }) => {
      page = currentPage;
    });
    it("should select an option using value", async () => {
      await expect(page).toSelect('select[name="my-select"]', "opt1");
      const currentValue = await page.evaluate(
        () => document.querySelector('select[name="my-select"]').value
      );
      expect(currentValue).toBe("opt1");
    });

    it("should select an option using text", async () => {
      await expect(page).toSelect('select[name="my-select"]', "Option 2");
      const currentValue = await page.evaluate(
        () => document.querySelector('select[name="my-select"]').value
      );
      expect(currentValue).toBe("opt2");
    });

    it("should return an error if option is not found", async () => {
      expect.assertions(3);

      try {
        await expect(page).toSelect(
          'select[name="my-select"]',
          "Another world"
        );
      } catch (error) {
        expect(error.message).toMatch(
          'Option not found "select[name="my-select"]" ("Another world")'
        );
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });

  describe("ElementHandle", () => {
    it("should select an option using value", async () => {
      const body = await page.$("body");
      await expect(body).toSelect('select[name="my-select"]', "opt1");
      const currentValue = await page.evaluate(
        () => document.querySelector('select[name="my-select"]').value
      );
      expect(currentValue).toBe("opt1");
    });

    it("should select an option using text", async () => {
      const body = await page.$("body");
      await expect(body).toSelect('select[name="my-select"]', "Option 2");
      const currentValue = await page.evaluate(
        () => document.querySelector('select[name="my-select"]').value
      );
      expect(currentValue).toBe("opt2");
    });

    it("should return an error if option is not found", async () => {
      const body = await page.$("body");
      expect.assertions(3);

      try {
        await expect(body).toSelect(
          'select[name="my-select"]',
          "Another world"
        );
      } catch (error) {
        expect(error.message).toMatch(
          'Option not found "select[name="my-select"]" ("Another world")'
        );
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });
});
