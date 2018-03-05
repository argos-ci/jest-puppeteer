describe('Basic', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should display "This is home!" text on page', async () => {
    const text = await page.evaluate(() => document.body.textContent)
    expect(text).toContain('This is home!')
  })
})
