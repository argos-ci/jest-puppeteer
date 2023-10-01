import { resolve } from "node:path";
import { setupPage } from "./test-util";
import { Frame, Page } from "puppeteer";

describe("toUploadFile", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (instanceType) => {
    let instance: Page | Frame;

    setupPage(instanceType, ({ currentPage }) => {
      instance = currentPage;
    });

    it("should upload a select file", async () => {
      await expect(instance).toUploadFile(
        'input[type="file"]',
        resolve(__dirname, "../../__fixtures__/file.txt"),
      );
    });

    it("should return an error if upload is not possible", async () => {
      expect.assertions(2);

      try {
        await expect(instance).toUploadFile(
          'input[name="foo"]',
          resolve(__dirname, "../../__fixtures__/file.txt"),
        );
      } catch (error: any) {
        expect(error.message).toMatch('Element input[name="foo"] not found');
      }
    });
  });

  describe("ElementHandle", () => {
    it("should upload a select file", async () => {
      const body = await page.$("body");
      await expect(body).toUploadFile(
        'input[type="file"]',
        resolve(__dirname, "../../__fixtures__/file.txt"),
      );
    });

    it("should return an error if upload is not possible", async () => {
      const body = await page.$("body");
      expect.assertions(2);

      try {
        await expect(body).toUploadFile(
          'input[name="foo"]',
          resolve(__dirname, "../../__fixtures__/file.txt"),
        );
      } catch (error: any) {
        expect(error.message).toMatch('Element input[name="foo"] not found');
      }
    });
  });
});
