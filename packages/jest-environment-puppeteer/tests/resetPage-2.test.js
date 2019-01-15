describe('resetPage', () => {
  test('resetPage should reset page', async () => {
    await jestPuppeteer.resetPage()
    const text = await page.$("#test");
    expect(text).toBe(null)
    await page.setContent('<div id="test"></div>')
  })
})
