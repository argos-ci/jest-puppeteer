/* eslint-env jest */
function waitForFrame(page) {
  let fulfill;
  const promise = new Promise((resolve) => {
    fulfill = resolve;
  });
  function checkFrame() {
    const frame = page.frames().find((f) => f.parentFrame() !== null);
    if (frame) fulfill(frame);
    else page.once(`frameattached`, checkFrame);
  }
  checkFrame();
  return promise;
}

async function goToPage(page, route, isFrame, cb) {
  let currentPage = page;
  await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}/${route}`);
  if (isFrame) {
    currentPage = await waitForFrame(page);
  }
  cb({
    currentPage,
  });
}

export const setupPage = (pageType, cb) => {
  beforeEach(async () => {
    if (pageType === `Page`) {
      cb({
        currentPage: page,
      });
    } else if (pageType === "ShadowPage") {
      await goToPage(page, "shadow.html", false, cb);
    } else if (pageType === "ShadowFrame") {
      await goToPage(page, "shadowFrame.html", true, cb);
    } else {
      await goToPage(page, "frame.html", true, cb);
    }
  });
};
