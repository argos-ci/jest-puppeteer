describe('toFill', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

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
      expect(error.message).toMatch('Unable to find "[name="notFound"]" field')
    }
  })
})
