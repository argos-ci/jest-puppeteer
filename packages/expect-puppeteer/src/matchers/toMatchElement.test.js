describe('toMatchElement', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  describe('Page', () => {
    it('should match using selector', async () => {
      const element = await expect(page).toMatchElement('a[href="/page2.html"]')
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toBe('Page 2')
    })

    it('should match using text', async () => {
      const element = await expect(page).toMatchElement('a', { text: 'Page 2' })
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toBe('Page 2')
    })

    it('should return an error if element is not found', async () => {
      expect.assertions(3)

      try {
        await expect(page).toMatchElement('a', { text: 'Nop' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found')
        expect(error.message).toMatch('waiting failed')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should match using selector', async () => {
      const main = await page.$('main')
      const element = await expect(main).toMatchElement('#in-the-main')
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toMatch('A div in the main')
    })

    it('should match using text', async () => {
      const main = await page.$('main')
      const element = await expect(main).toMatchElement('*', {
        text: 'in the main',
      })
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toMatch('A div in the main')
    })

    it('should return an error if element is not found', async () => {
      const main = await page.$('main')
      expect.assertions(3)

      try {
        await expect(main).toMatchElement('a', { text: 'Page 2' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Page 2") not found')
        expect(error.message).toMatch('waiting failed')
      }
    })
  })
})
