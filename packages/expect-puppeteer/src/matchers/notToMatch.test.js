describe('not.toMatch', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  describe('Page', () => {
    it('should be ok if text is not in the page', async () => {
      await expect(page).not.toMatch('Nop!')
    })

    it('should return an error if text is in the page', async () => {
      expect.assertions(3)

      try {
        await expect(page).not.toMatch('home')
      } catch (error) {
        expect(error.message).toMatch('Text found "home"')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should be ok if text is in the page', async () => {
      const dialogBtn = await page.$('#dialog-btn')
      await expect(dialogBtn).not.toMatch('Nop')
    })

    it('should return an error if text is not in the page', async () => {
      expect.assertions(3)
      const dialogBtn = await page.$('#dialog-btn')

      try {
        await expect(dialogBtn).not.toMatch('Open dialog')
      } catch (error) {
        expect(error.message).toMatch('Text found "Open dialog"')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })
})
