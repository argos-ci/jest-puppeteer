import { resolve } from "node:path";
import { setupPage } from "./test-util";
import { Frame, Page, TimeoutError } from "puppeteer";

// import globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("toMatchElement", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame"])("%s", (instanceType) => {
    let instance: Page | Frame;
    setupPage(instanceType, ({ currentPage }) => {
      instance = currentPage;
    });
    it("should match using selector", async () => {
      const element = await expect(instance).toMatchElement(
        'a[href="/page2.html"]',
      );
      const textContentProperty = await element.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toBe("Page 2");
    });

    it("should match using text (string)", async () => {
      const element = await expect(instance).toMatchElement("a", {
        text: "Page 2",
      });
      const textContentProperty = await element.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toBe("Page 2");
    });

    it("should match using text (RegExp)", async () => {
      const element = await expect(instance).toMatchElement("a", {
        text: /Page\s2/,
      });
      const textContentProperty = await element.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toBe("Page 2");
    });

    it("should return an error if element is not found", async () => {
      expect.assertions(4);

      try {
        await expect(instance).toMatchElement("a", { text: "Nop" });
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch('Element a (text: "Nop") not found');
        expect(e.message).toMatch("Waiting failed: 500ms exceeded");
        expect(e.stack).toMatch(resolve(__filename));
      }
    });

    it("should match using visible options", async () => {
      expect.assertions(11);

      const normalElement = await expect(instance).toMatchElement(".normal", {
        visible: true,
      });
      const textContentProperty =
        await normalElement.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toBe("normal element");

      try {
        await expect(instance).toMatchElement(".hidden", { visible: true });
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch("Element .hidden not found");
        expect(e.message).toMatch("Waiting failed: 500ms exceeded");
      }

      try {
        await expect(instance).toMatchElement(".displayed", {
          visible: true,
        });
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch("Element .displayed not found");
        expect(e.message).toMatch("Waiting failed: 500ms exceeded");
      }

      try {
        await expect(instance).toMatchElement(".displayedWithClassname", {
          visible: true,
        });
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch("Element .displayedWithClassname not found");
        expect(e.message).toMatch("Waiting failed: 500ms exceeded");
      }
    });
  });

  describe("ElementHandle", () => {
    it("should match using selector", async () => {
      const main = await page.$("main");
      const element = await expect(main).toMatchElement("#in-the-main");
      const textContentProperty = await element.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toMatch("A div in the main");
    });

    it("should match using text (string)", async () => {
      const main = await page.$("main");
      const element = await expect(main).toMatchElement("*", {
        text: "in the main",
      });
      const textContentProperty = await element.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toMatch("A div in the main");
    });

    it("should match using text (RegExp)", async () => {
      const main = await page.$("main");
      const element = await expect(main).toMatchElement("*", {
        text: /in.the\smain/g,
      });
      const textContentProperty = await element.getProperty("textContent");
      const textContent = await textContentProperty.jsonValue();
      expect(textContent).toMatch("A div in the main");
    });

    it("should return an error if element is not found", async () => {
      const main = await page.$("main");
      expect.assertions(3);

      try {
        await expect(main).toMatchElement("a", { text: "Page 2" });
      } catch (error: unknown) {
        const e = error as TimeoutError;
        expect(e.message).toMatch('Element a (text: "Page 2") not found');
        expect(e.message).toMatch("Waiting failed: 500ms exceeded");
      }
    });
  });
});
