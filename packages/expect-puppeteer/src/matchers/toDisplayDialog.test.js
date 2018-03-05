describe('toDisplayDialog', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should handle dialog', async () => {
    const dialog = await expect(page).toDisplayDialog(async () => {
      await page.click('#dialog-btn')
    })
    expect(dialog.message()).toBe('Bouh!')
    await dialog.accept()
  })
})
