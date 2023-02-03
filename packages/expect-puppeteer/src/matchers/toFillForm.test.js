import path from "path";
import { setupPage } from "./setupPage";

describe("toFillForm", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (pageType) => {
    let page;
    setupPage(pageType, ({ currentPage }) => {
      page = currentPage;
    });
    it("should fill input", async () => {
      await expect(page).toFillForm("form", {
        firstName: "James",
        lastName: "Bond",
      });
      const values = await page.evaluate(() => ({
        firstName: document.querySelector('[name="firstName"]').value,
        lastName: document.querySelector('[name="lastName"]').value,
      }));
      expect(values).toEqual({
        firstName: "James",
        lastName: "Bond",
      });
    });

    it("should return an error if text is not in the page", async () => {
      expect.assertions(3);

      try {
        await expect(page).toFillForm('form[name="notFound"]', {
          firstName: "James",
          lastName: "Bond",
        });
      } catch (error) {
        expect(error.message).toMatch(
          'Element form[name="notFound"] not found'
        );
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });

  describe("ElementHandle", () => {
    it("should fill input", async () => {
      const body = await page.$("body");
      await expect(body).toFillForm("form", {
        firstName: "James",
        lastName: "Bond",
      });
      const values = await page.evaluate(() => ({
        firstName: document.querySelector('[name="firstName"]').value,
        lastName: document.querySelector('[name="lastName"]').value,
      }));
      expect(values).toEqual({
        firstName: "James",
        lastName: "Bond",
      });
    });

    it("should return an error if text is not in the page", async () => {
      const body = await page.$("body");
      expect.assertions(3);

      try {
        await expect(body).toFillForm('form[name="notFound"]', {
          firstName: "James",
          lastName: "Bond",
        });
      } catch (error) {
        expect(error.message).toMatch(
          'Element form[name="notFound"] not found'
        );
        expect(error.stack).toMatch(path.resolve(__filename));
      }
    });
  });
});
