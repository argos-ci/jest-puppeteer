import { resolve } from "node:path";
import { setupPage } from "./test-util";
import { Frame, Page, TimeoutError } from "puppeteer";

// import globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("toMatchTextContent", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame", "ShadowPage", "ShadowFrame"])(
    "%s",
    (instanceType) => {
      let instance: Page | Frame;
      setupPage(instanceType, ({ currentPage }) => {
        instance = currentPage;
      });

      const options = ["ShadowPage", "ShadowFrame"].includes(instanceType)
        ? { traverseShadowRoots: true }
        : {};

      it("should be ok if text is in the page", async () => {
        await expect(instance).toMatchTextContent("This is home!", options);
      });

      it("should support RegExp", async () => {
        await expect(instance).toMatchTextContent(/THIS.is.home/i, options);
      });

      it("should return an error if text is not in the page", async () => {
        expect.assertions(4);

        try {
          await expect(instance).toMatchTextContent("Nop", options);
        } catch (error: unknown) {
          const e = error as TimeoutError;
          expect(e.message).toMatch('Text not found "Nop"');
          expect(e.message).toMatch("Waiting failed: 500ms exceeded");
          expect(e.stack).toMatch(resolve(__filename));
        }
      });
    },
  );

  describe("ElementHandle", () => {
    it("should be ok if text is in the page", async () => {
      const dialogBtn = await page.$("#dialog-btn");
      await expect(dialogBtn).toMatchTextContent("Open dialog");
    });

    it("should support RegExp", async () => {
      const dialogBtn = await page.$("#dialog-btn");
      await expect(dialogBtn).toMatchTextContent(/OPEN/i);
    });

    it("should return an error if text is not in the page", async () => {
      expect.assertions(4);
      const dialogBtn = await page.$("#dialog-btn");

      try {
        await expect(dialogBtn).toMatchTextContent("This is home!");
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch('Text not found "This is home!"');
        expect(e.message).toMatch("Waiting failed: 500ms exceeded");
        expect(e.stack).toMatch(resolve(__filename));
      }
    });
  });
});
