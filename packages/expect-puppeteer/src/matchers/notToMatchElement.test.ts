import { resolve } from "node:path";
import { Frame, Page } from "puppeteer";
import { setupPage } from "./test-util";

describe("not.toMatchElement", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (instanceType) => {
    let instance: Page | Frame;
    setupPage(instanceType, ({ currentPage }) => {
      instance = currentPage;
    });
    it("should not match using selector", async () => {
      await expect(instance).not.toMatchElement("wtf");
    });

    it("should match using text", async () => {
      await expect(instance).not.toMatchElement("a", { text: "Nothing here" });
    });

    it("should return an error if element is not found", async () => {
      expect.assertions(4);

      try {
        await expect(instance).not.toMatchElement("a", { text: "Page 2" });
      } catch (error: any) {
        expect(error.message).toMatch('Element a (text: "Page 2") found');
        expect(error.message).toMatch("Waiting failed: 500ms exceeded");
        expect(error.stack).toMatch(resolve(__filename));
      }
    });
  });

  describe("ElementHandle", () => {
    it("should not match using selector", async () => {
      const main = await page.$("main");
      await expect(main).not.toMatchElement("main");
    });

    it("should match using text", async () => {
      const main = await page.$("main");
      await expect(main).not.toMatchElement("div", { text: "Nothing here" });
    });

    it("should return an error if element is not found", async () => {
      const main = await page.$("main");
      expect.assertions(4);

      try {
        await expect(main).not.toMatchElement("div", { text: "main" });
      } catch (error: any) {
        expect(error.message).toMatch('Element div (text: "main") found');
        expect(error.message).toMatch("Waiting failed: 500ms exceeded");
        expect(error.stack).toMatch(resolve(__filename));
      }
    });
  });
});
