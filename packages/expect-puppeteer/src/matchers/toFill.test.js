import path from "path";
import { setupPage } from "./setupPage";

describe("toFill", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (pageType) => {
    let page;
    setupPage(pageType, ({ currentPage }) => {
      page = currentPage;
    });
    it("should fill input", async () => {
      await expect(page).toFill('[name="firstName"]', "James");
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value
      );
      expect(value).toBe("James");
    });

    it("should empty the input given an empty string", async () => {
      await expect(page).toFill('[name="firstName"]', "James");
      await expect(page).toFill('[name="firstName"]', "");
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value
      );
      expect(value).toBe("");
    });

    it("should fill textarea", async () => {
      await expect(page).toFill(
        '[name="notes"]',
        "These are \n multiline \n notes"
      );
      const value = await page.evaluate(
        () => document.querySelector('[name="notes"]').value
      );
      expect(value).toBe("These are \n multiline \n notes");
    });

    it("should empty the textarea given an empty string", async () => {
      await expect(page).toFill(
        '[name="notes"]',
        "These are \n multiline \n notes"
      );
      await expect(page).toFill('[name="notes"]', "");
      const value = await page.evaluate(
        () => document.querySelector('[name="notes"]').value
      );
      expect(value).toBe("");
    });

    it("should fill number input", async () => {
      await expect(page).toFill('[name="age"]', "10");
      const value = await page.evaluate(
        () => document.querySelector('[name="age"]').value
      );
      expect(value).toBe("10");
    });

    it("should empty number input given an empty string", async () => {
      await expect(page).toFill('[name="age"]', "10");
      await expect(page).toFill('[name="age"]', "");
      const value = await page.evaluate(
        () => document.querySelector('[name="age"]').value
      );
      expect(value).toBe("");
    });

    it("should return an error if text is not in the page", async () => {
      expect.assertions(3);

      try {
        await expect(page).toFill('[name="notFound"]', "James");
      } catch (error) {
        expect(error.message).toMatch('Element [name="notFound"] not found');
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });

  describe("ElementHandle", () => {
    it("should fill input", async () => {
      const body = await page.$("body");
      await expect(body).toFill('[name="firstName"]', "James");
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value
      );
      expect(value).toBe("James");
    });

    it("should fill input with custom delay", async () => {
      const body = await page.$("body");
      await expect(body).toFill('[name="firstName"]', "James", {
        delay: 50,
      });
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value
      );
      expect(value).toBe("James");
    });

    it("should return an error if text is not in the page", async () => {
      const body = await page.$("body");
      expect.assertions(3);

      try {
        await expect(body).toFill('[name="notFound"]', "James");
      } catch (error) {
        expect(error.message).toMatch('Element [name="notFound"] not found');
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });
});
