describe('toFill', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  describe('Page', () => {
    it('should fill input', async () => {
      await expect(page).toFill('[name="firstName"]', 'James')
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value,
      )
      expect(value).toBe('James')
    })

    it('should return an error if text is not in the page', async () => {
      expect.assertions(2)

      try {
        await expect(page).toFill('[name="notFound"]', 'James')
      } catch (error) {
        expect(error.message).toMatch('Element [name="notFound"] not found')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should fill input', async () => {
      const body = await page.$('body')
      await expect(body).toFill('[name="firstName"]', 'James')
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value,
      )
      expect(value).toBe('James')
    })
    it('should fill input with custom delay', async () => {
      const body = await page.$('body')
      await expect(body).toFill('[name="firstName"]', 'James', {
        delay: 50,
      })
      const value = await page.evaluate(
        () => document.querySelector('[name="firstName"]').value,
      )
      expect(value).toBe('James')
    })

    it('should return an error if text is not in the page', async () => {
      const body = await page.$('body')
      expect.assertions(2)

      try {
        await expect(body).toFill('[name="notFound"]', 'James')
      } catch (error) {
        expect(error.message).toMatch('Element [name="notFound"] not found')
      }
    })
  })
})
