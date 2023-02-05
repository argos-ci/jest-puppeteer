import { resolve } from "node:path";
import { Frame, Page } from "puppeteer";
import { setupPage } from "./test-util";

describe("not.toMatchTextContent", () => {
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

      it("should be ok if text is not in the page", async () => {
        await expect(instance).not.toMatchTextContent("Nop!", options);
      });

      it("should return an error if text is in the page", async () => {
        expect.assertions(4);

        try {
          await expect(instance).not.toMatchTextContent("home", options);
        } catch (error: any) {
          expect(error.message).toMatch('Text found "home"');
          expect(error.message).toMatch("Waiting failed: 500ms exceeded");
          expect(error.stack).toMatch(resolve(__filename));
        }
      });
    }
  );

  describe("ElementHandle", () => {
    it("should be ok if text is in the page", async () => {
      const dialogBtn = await page.$("#dialog-btn");
      await expect(dialogBtn).not.toMatchTextContent("Nop");
    });

    it("should return an error if text is not in the page", async () => {
      expect.assertions(4);
      const dialogBtn = await page.$("#dialog-btn");

      try {
        await expect(dialogBtn).not.toMatchTextContent("Open dialog");
      } catch (error: any) {
        expect(error.message).toMatch('Text found "Open dialog"');
        expect(error.message).toMatch("Waiting failed: 500ms exceeded");
        expect(error.stack).toMatch(resolve(__filename));
      }
    });
  });
});
