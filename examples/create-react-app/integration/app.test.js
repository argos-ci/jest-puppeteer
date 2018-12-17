const path = require('path')

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display a react logo', async () => {
    await expect(page).toMatch('React')
  })

  it('should match a button with a "Get Started" text inside', async () => {
    await expect(page).toMatchElement('.App-button', { text: 'Get Started' })
  })

  it('should match a input with a "textInput" name then fill it with text', async () => {
    await expect(page).toFill('input[name="textInput"]', 'James')
  })

  it('should match a form with a "myForm" name then fill its controls', async () => {
    await expect(page).toFillForm('form[name="testForm"]', {
      testOne: 'James',
      testTwo: 'Bond',
    })
  })

  it('should match a select with a "testSelect" name then select the specified option', async () => {
    await expect(page).toSelect('select[name="testSelect"]', 'Second Value')
  })

  it('should match a File Input with a "App-inputFile" class then fill it with a local file', async () => {
    await expect(page).toUploadFile(
      '.App-inputFile',
      path.join(__dirname, 'jest.config.js'),
    )
  })
})
