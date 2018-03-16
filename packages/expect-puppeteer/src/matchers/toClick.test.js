describe('toClick', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  describe('Page', () => {
    it('should click using selector', async () => {
      await expect(page).toClick('a[href="/page2.html"]')
      await page.waitForSelector('html')
      const pathname = await page.evaluate(() => document.location.pathname)
      expect(pathname).toBe('/page2.html')
    })

    it('should click using text', async () => {
      await expect(page).toClick('a', { text: 'Page 2' })
      await page.waitForSelector('html')
      const pathname = await page.evaluate(() => document.location.pathname)
      expect(pathname).toBe('/page2.html')
    })

    it('should return an error if element is not found', async () => {
      expect.assertions(2)

      try {
        await expect(page).toClick('a', { text: 'Nop' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should click using selector', async () => {
      const body = await page.$('body')
      await expect(body).toClick('a[href="/page2.html"]')
      await page.waitForSelector('html')
      const pathname = await page.evaluate(() => document.location.pathname)
      expect(pathname).toBe('/page2.html')
    })

    it('should click using text', async () => {
      const body = await page.$('body')
      await expect(body).toClick('a', { text: 'Page 2' })
      await page.waitForSelector('html')
      const pathname = await page.evaluate(() => document.location.pathname)
      expect(pathname).toBe('/page2.html')
    })

    it('should return an error if element is not found', async () => {
      const body = await page.$('body')
      expect.assertions(2)

      try {
        await expect(body).toClick('a', { text: 'Nop' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found')
      }
    })
  })
})
