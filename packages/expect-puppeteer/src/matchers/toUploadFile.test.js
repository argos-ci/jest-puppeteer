import path from "path";
import { setupPage } from "./setupPage";

describe("toUploadFile", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (pageType) => {
    let page;
    setupPage(pageType, ({ currentPage }) => {
      page = currentPage;
    });
    it("should upload a select file", async () => {
      await expect(page).toUploadFile(
        'input[type="file"]',
        path.join(__dirname, "../../__fixtures__/file.txt")
      );
    });

    it("should return an error if upload is not possible", async () => {
      expect.assertions(2);

      try {
        await expect(page).toUploadFile(
          'input[name="foo"]',
          path.join(__dirname, "../../__fixtures__/file.txt")
        );
      } catch (error) {
        expect(error.message).toMatch('Element input[name="foo"] not found');
      }
    });
  });

  describe("ElementHandle", () => {
    it("should upload a select file", async () => {
      const body = await page.$("body");
      await expect(body).toUploadFile(
        'input[type="file"]',
        path.join(__dirname, "../../__fixtures__/file.txt")
      );
    });

    it("should return an error if upload is not possible", async () => {
      const body = await page.$("body");
      expect.assertions(2);

      try {
        await expect(body).toUploadFile(
          'input[name="foo"]',
          path.join(__dirname, "../../__fixtures__/file.txt")
        );
      } catch (error) {
        expect(error.message).toMatch('Element input[name="foo"] not found');
      }
    });
  });
});
