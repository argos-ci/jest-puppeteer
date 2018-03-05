describe('toMatch', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should be ok if text is in the page', async () => {
    await expect(page).toMatch('This is home!')
  })

  it('should return an error if text is not in the page', async () => {
    expect.assertions(2)

    try {
      await expect(page).toMatch('badText')
    } catch (error) {
      expect(error.message).toMatch('Expected to find text: "badText"')
    }
  })

  it('should not throw error if text is found on element', async () => {
    const elementHandle = await page.$('header');

    expect(elementHandle).toMatch('This is home!');
  });

  it('should throw an error if text is not found on element', async () => {
    const elementHandle = await page.$('header');

    try {
      await expect(elementHandle).toMatch('Bad Text');
    } catch (error) {
      expect(error.message).toMatch('Expected to find text: "Bad Text"')
    }
  });
})
