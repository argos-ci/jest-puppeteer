describe('toMatch', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  describe('Page', () => {
    it('should be ok if text is in the page', async () => {
      await expect(page).toMatch('This is home!')
    })

    it('should support RegExp', async () => {
      await expect(page).toMatch(/THIS.is.home/i)
    })

    it('should return an error if text is not in the page', async () => {
      expect.assertions(3)

      try {
        await expect(page).toMatch('Nop')
      } catch (error) {
        expect(error.message).toMatch('Text not found "Nop"')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should be ok if text is in the page', async () => {
      const dialogBtn = await page.$('#dialog-btn')
      await expect(dialogBtn).toMatch('Open dialog')
    })

    it('should support RegExp', async () => {
      const dialogBtn = await page.$('#dialog-btn')
      await expect(dialogBtn).toMatch(/OPEN/i)
    })

    it('should return an error if text is not in the page', async () => {
      expect.assertions(3)
      const dialogBtn = await page.$('#dialog-btn')

      try {
        await expect(dialogBtn).toMatch('This is home!')
      } catch (error) {
        expect(error.message).toMatch('Text not found "This is home!"')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })
})
