import path from 'path'

describe('toUploadFile', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should upload a select file', async () => {
    await expect(page).toUploadFile(
      'input[type="file"]',
      path.join(__dirname, '../../__fixtures__/file.txt'),
    )
  })

  it('should return an error if upload is not possible', async () => {
    expect.assertions(2)

    try {
      await expect(page).toUploadFile(
        'input[name="foo"]',
        path.join(__dirname, '../../__fixtures__/file.txt'),
      )
    } catch (error) {
      expect(error.message).toMatch('Unable to find "input[name="foo"]" field')
    }
  })
})
