describe('Google', () => {
  beforeAll(async () => {
    await mainPage.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    const text = await mainPage.evaluate(() => document.body.textContent)
    expect(text).toContain('google')
  })
})
