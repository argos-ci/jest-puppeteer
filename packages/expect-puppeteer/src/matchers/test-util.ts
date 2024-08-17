/* eslint-env jest */
import type { Page, Frame } from "puppeteer";

function waitForFrame(page: Page) {
  return new Promise<Frame>((resolve) => {
    function checkFrame() {
      const frame = page.frames().find((f) => f.parentFrame() !== null);
      if (frame) resolve(frame);
      else page.once(`frameattached`, checkFrame);
    }
    checkFrame();
  });
}

async function goToPage(
  page: Page,
  route: string,
  isFrame: boolean,
  cb: (arg0: { currentPage: Page | Frame }) => void,
) {
  let currentPage: Page | Frame = page;
  await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}/${route}`);
  if (isFrame) {
    currentPage = await waitForFrame(page);
  }
  cb({ currentPage });
}

export const setupPage = (
  instanceType: string,
  cb: (arg0: { currentPage: Page | Frame }) => void,
) => {
  beforeEach(async () => {
    if (instanceType === "Page") {
      cb({ currentPage: page });
    } else if (instanceType === "ShadowPage") {
      await goToPage(page, "shadow.html", false, cb);
    } else if (instanceType === "ShadowFrame") {
      await goToPage(page, "shadowFrame.html", true, cb);
    } else if (instanceType === "Frame") {
      await goToPage(page, "frame.html", true, cb);
    }
  });
};
