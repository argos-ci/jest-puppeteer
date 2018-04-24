describe('not.toMatchElement', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  describe('Page', () => {
    it('should not match using selector', async () => {
      await expect(page).not.toMatchElement('wtf')
    })

    it('should match using text', async () => {
      await expect(page).not.toMatchElement('a', { text: 'Nothing here' })
    })

    it('should return an error if element is not found', async () => {
      expect.assertions(3)

      try {
        await expect(page).not.toMatchElement('a', { text: 'Page 2' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Page 2") found')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should not match using selector', async () => {
      const main = await page.$('main')
      await expect(main).not.toMatchElement('main')
    })

    it('should match using text', async () => {
      const main = await page.$('main')
      await expect(main).not.toMatchElement('div', { text: 'Nothing here' })
    })

    it('should return an error if element is not found', async () => {
      const main = await page.$('main')
      expect.assertions(3)

      try {
        await expect(main).not.toMatchElement('div', { text: 'main' })
      } catch (error) {
        expect(error.message).toMatch('Element div (text: "main") found')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })
})
