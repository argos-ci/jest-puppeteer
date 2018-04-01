describe('expect-puppeteer', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should work with original Jest matchers', async () => {
    expect(page).toBeDefined()
    expect(page).not.toBe(null)

    const main = await page.$('main')
    expect(main).toBeDefined()
    expect(main).not.toBe(null)

    expect(200).toBe(200)
  })
})
