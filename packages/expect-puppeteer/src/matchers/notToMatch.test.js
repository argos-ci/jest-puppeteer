import { setupPage } from './setupPage'

describe('not.toMatch', () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`)
  })

  describe.each(['Page', 'Frame', 'ShadowPage', 'ShadowFrame'])(
    '%s',
    (pageType) => {
      let page
      setupPage(pageType, ({ currentPage }) => {
        page = currentPage
      })

      const options = ['ShadowPage', 'ShadowFrame'].includes(pageType)
        ? { traverseShadowRoots: true }
        : {}

      it('should be ok if text is not in the page', async () => {
        await expect(page).not.toMatch('Nop!', options)
      })

      it('should return an error if text is in the page', async () => {
        expect.assertions(3)

        try {
          await expect(page).not.toMatch('home', options)
        } catch (error) {
          expect(error.message).toMatch('Text found "home"')
          expect(error.message).toMatch('waiting for function failed')
        }
      })

      describe('ElementHandle', () => {
        it('should be ok if text is in the page', async () => {
          const dialogBtn = await page.$('#dialog-btn')
          await expect(dialogBtn).not.toMatch('Nop', options)
        })

        it('should return an error if text is not in the page', async () => {
          expect.assertions(3)
          const dialogBtn = await page.$('#dialog-btn')

          try {
            await expect(dialogBtn).not.toMatch('Open dialog', options)
          } catch (error) {
            expect(error.message).toMatch('Text found "Open dialog"')
            expect(error.message).toMatch('waiting for function failed')
          }
        })
      })
    },
  )
})
