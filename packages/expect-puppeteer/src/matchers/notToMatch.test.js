describe('not.toMatch', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should be ok if text is not in the page', async () => {
    await expectPage().not.toMatch('Nop!')
  })

  it('should return an error if text is in the page', async () => {
    expect.assertions(2)

    try {
      await expectPage().not.toMatch('home')
    } catch (error) {
      expect(error.message).toMatch('Text found "home"')
    }
  })
})
