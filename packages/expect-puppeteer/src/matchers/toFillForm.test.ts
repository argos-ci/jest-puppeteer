import { resolve } from "node:path";
import { Frame, Page, TimeoutError } from "puppeteer";
import { setupPage } from "./test-util";

// import globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("toFillForm", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (instanceType) => {
    let instance: Page | Frame;
    setupPage(instanceType, ({ currentPage }) => {
      instance = currentPage;
    });
    it("should fill input", async () => {
      await expect(instance).toFillForm("form", {
        firstName: "James",
        lastName: "Bond",
      });
      const values = await instance.evaluate(() => ({
        firstName:
          document.querySelector<HTMLInputElement>('[name="firstName"]')!.value,
        lastName:
          document.querySelector<HTMLInputElement>('[name="lastName"]')!.value,
      }));
      expect(values).toEqual({
        firstName: "James",
        lastName: "Bond",
      });
    });

    it("should return an error if text is not in the page", async () => {
      expect.assertions(3);

      try {
        await expect(instance).toFillForm('form[name="notFound"]', {
          firstName: "James",
          lastName: "Bond",
        });
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch('Element form[name="notFound"] not found');
        expect(e.stack).toMatch(resolve(__filename));
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
        firstName:
          document.querySelector<HTMLInputElement>('[name="firstName"]')!.value,
        lastName:
          document.querySelector<HTMLInputElement>('[name="lastName"]')!.value,
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
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch('Element form[name="notFound"] not found');
        expect(e.stack).toMatch(resolve(__filename));
      }
    });
  });
});
