describe('resetBrowser', () => {
  test('should reset browser', async () => {
    const oldBrowser = browser
    await jestPuppeteer.resetBrowser()
    expect(browser).not.toBe(oldBrowser)
    // eslint-disable-next-line no-underscore-dangle
    expect(browser._connection._closed).toBe(false)
    // eslint-disable-next-line no-underscore-dangle
    expect(oldBrowser._connection._closed).toBe(true)
  })
})
