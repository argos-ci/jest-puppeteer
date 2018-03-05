describe('toMatch', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should click using selector', async () => {
    await expect(page).toClick('a[href="/page2.html"]')
    const pathname = await page.evaluate(() => document.location.pathname)
    expect(pathname).toBe('/page2.html')
  })

  it('should click using text', async () => {
    await expect(page).toClick('a', { text: 'Page 2' })
    const pathname = await page.evaluate(() => document.location.pathname)
    expect(pathname).toBe('/page2.html')
  })

  it('should return an error if element is not found', async () => {
    expect.assertions(2)

    try {
      await expect(page).toClick('a', { text: 'Nop' })
    } catch (error) {
      expect(error.message).toMatch('Error: Element a (text: "Nop") not found')
    }
  })
})
