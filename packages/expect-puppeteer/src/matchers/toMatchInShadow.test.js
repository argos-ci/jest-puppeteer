import { setupPage } from './setupPage'

describe('toMatchInShadow', () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`)
  })

  describe.each(['ShadowPage', 'ShadowFrame'])('%s', (pageType) => {
    let page
    setupPage(pageType, ({ currentPage }) => {
      page = currentPage
    })
    it('should be ok if text is in the page in shadow DOM', async () => {
      await expect(page).toMatchInShadow('This is home!')
    })

    it('should be ok if text is in the page in a slot', async () => {
      await expect(page).toMatchInShadow('Light DOM content (slotted)')
    })

    it('should support RegExp', async () => {
      await expect(page).toMatchInShadow(/THIS.is.home/i)
    })

    it('should return an error if text is not in the page', async () => {
      expect.assertions(3)

      try {
        await expect(page).toMatchInShadow('Nop')
      } catch (error) {
        expect(error.message).toMatch('Text not found "Nop"')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should be ok if text is in the page', async () => {
      const dialogBtn = await page.$('#dialog-btn')
      await expect(dialogBtn).toMatchInShadow('Open dialog')
    })

    it('should support RegExp', async () => {
      const dialogBtn = await page.$('#dialog-btn')
      await expect(dialogBtn).toMatchInShadow(/OPEN/i)
    })

    it('should return an error if text is not in the page', async () => {
      expect.assertions(3)
      const dialogBtn = await page.$('#dialog-btn')

      try {
        await expect(dialogBtn).toMatchInShadow('This is home!')
      } catch (error) {
        expect(error.message).toMatch('Text not found "This is home!"')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })
})
