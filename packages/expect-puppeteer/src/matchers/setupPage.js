function waitForFrame(page) {
  let fulfill
  const promise = new Promise(resolve => {
    fulfill = resolve
  })
  function checkFrame() {
    const frame = page.frames().find(f => f.parentFrame() !== null)
    if (frame) fulfill(frame)
    else page.once(`frameattached`, checkFrame)
  }
  checkFrame()
  return promise
}

export const setupPage = (pageType, cb) => {
  let currentPage = page
  beforeEach(async () => {
    if (pageType === `Page`) {
      cb({
        currentPage,
      })
      return
    }
    await page.goto(
      `http://localhost:${process.env.TEST_SERVER_PORT}/frame.html`,
    )
    currentPage = await waitForFrame(page)
    cb({
      currentPage,
    })
  })
}
