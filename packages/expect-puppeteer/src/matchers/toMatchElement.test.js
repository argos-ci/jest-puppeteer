function waitForFrame(page) {
  let fulfill
  const promise = new Promise(resolve => {
    fulfill = resolve
  })
  function checkFrame() {
    const frame = page.frames().find(f => f.parentFrame() !== null)
    if (frame) fulfill(frame)
    else page.once(`frameattached`, checkFrame)
  }
  checkFrame()
  return promise
}
describe('toMatchElement', () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`)
  })

  describe.each(['Page', 'Frame'])('%s', type => {
    let currentPage
    beforeEach(async () => {
      if (type === `Page`) {
        currentPage = page
        return
      }
      await page.goto(
        `http://localhost:${process.env.TEST_SERVER_PORT}/frame.html`,
      )
      currentPage = await waitForFrame(page)
    })
    it('should match using selector', async () => {
      const element = await expect(currentPage).toMatchElement(
        'a[href="/page2.html"]',
      )
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toBe('Page 2')
    })

    it('should match using text (string)', async () => {
      const element = await expect(currentPage).toMatchElement('a', {
        text: 'Page 2',
      })
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toBe('Page 2')
    })

    it('should match using text (RegExp)', async () => {
      const element = await expect(currentPage).toMatchElement('a', {
        text: /Page\s2/,
      })
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toBe('Page 2')
    })

    it('should return an error if element is not found', async () => {
      expect.assertions(3)

      try {
        await expect(currentPage).toMatchElement('a', { text: 'Nop' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Nop") not found')
        expect(error.message).toMatch('waiting for function failed')
      }
    })

    it('should match using visible options', async () => {
      expect.assertions(11)

      const normalElement = await expect(currentPage).toMatchElement(
        '.normal',
        {
          visible: true,
        },
      )
      const textContentProperty = await normalElement.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toBe('normal element')

      try {
        await expect(currentPage).toMatchElement('.hidden', { visible: true })
      } catch (error) {
        expect(error.message).toMatch('Element .hidden not found')
        expect(error.message).toMatch('waiting for function failed')
      }

      try {
        await expect(currentPage).toMatchElement('.displayed', {
          visible: true,
        })
      } catch (error) {
        expect(error.message).toMatch('Element .displayed not found')
        expect(error.message).toMatch('waiting for function failed')
      }

      try {
        await expect(currentPage).toMatchElement('.displayedWithClassname', {
          visible: true,
        })
      } catch (error) {
        expect(error.message).toMatch(
          'Element .displayedWithClassname not found',
        )
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })

  describe('ElementHandle', () => {
    it('should match using selector', async () => {
      const main = await page.$('main')
      const element = await expect(main).toMatchElement('#in-the-main')
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toMatch('A div in the main')
    })

    it('should match using text (string)', async () => {
      const main = await page.$('main')
      const element = await expect(main).toMatchElement('*', {
        text: 'in the main',
      })
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toMatch('A div in the main')
    })

    it('should match using text (RegExp)', async () => {
      const main = await page.$('main')
      const element = await expect(main).toMatchElement('*', {
        text: /in.the\smain/g,
      })
      const textContentProperty = await element.getProperty('textContent')
      const textContent = await textContentProperty.jsonValue()
      expect(textContent).toMatch('A div in the main')
    })

    it('should return an error if element is not found', async () => {
      const main = await page.$('main')
      expect.assertions(3)

      try {
        await expect(main).toMatchElement('a', { text: 'Page 2' })
      } catch (error) {
        expect(error.message).toMatch('Element a (text: "Page 2") not found')
        expect(error.message).toMatch('waiting for function failed')
      }
    })
  })
})
