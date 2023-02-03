import path from "path";
import { setupPage } from "./setupPage";

describe("toMatch", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  describe.each(["Page", "Frame", "ShadowPage", "ShadowFrame"])(
    "%s",
    (pageType) => {
      let page;
      setupPage(pageType, ({ currentPage }) => {
        page = currentPage;
      });

      const options = ["ShadowPage", "ShadowFrame"].includes(pageType)
        ? { traverseShadowRoots: true }
        : {};

      it("should be ok if text is in the page", async () => {
        await expect(page).toMatch("This is home!", options);
      });

      it("should support RegExp", async () => {
        await expect(page).toMatch(/THIS.is.home/i, options);
      });

      it("should return an error if text is not in the page", async () => {
        expect.assertions(4);

        try {
          await expect(page).toMatch("Nop", options);
        } catch (error) {
          expect(error.message).toMatch('Text not found "Nop"');
          expect(error.message).toMatch("Waiting failed: 500ms exceeded");
          expect(error.stack).toMatch(path.resolve(__filename));
        }
      });

      describe("ElementHandle", () => {
        it("should be ok if text is in the page", async () => {
          const dialogBtn = await page.$("#dialog-btn");
          await expect(dialogBtn).toMatch("Open dialog", options);
        });

        it("should support RegExp", async () => {
          const dialogBtn = await page.$("#dialog-btn");
          await expect(dialogBtn).toMatch(/OPEN/i, options);
        });

        it("should return an error if text is not in the page", async () => {
          expect.assertions(4);
          const dialogBtn = await page.$("#dialog-btn");

          try {
            await expect(dialogBtn).toMatch("This is home!", options);
          } catch (error) {
            expect(error.message).toMatch('Text not found "This is home!"');
            expect(error.message).toMatch("Waiting failed: 500ms exceeded");
            expect(error.stack).toMatch(path.resolve(__filename));
          }
        });
      });
    }
  );
});
