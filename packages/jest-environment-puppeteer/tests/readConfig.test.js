import fs from 'fs'
import path from 'path'
import readConfig from '../src/readConfig'

jest.mock('fs')

function mockExists(value) {
  fs.exists.mockImplementation((path, callback) => callback(null, value))
}

describe('readConfig', () => {
  describe('with custom config path', () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = 'nop.js'
    })

    it('should return an error if not found', async () => {
      process.env.JEST_PUPPETEER_CONFIG = 'nop.js'
      expect.assertions(1)
      mockExists(false)
      try {
        await readConfig()
      } catch (error) {
        expect(error.message).toBe(
          "Error: Can't find a root directory while resolving a config file path.\nProvided path to resolve: nop.js",
        )
      }
    })

    it('should return custom config', async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        '__fixtures__/customConfig.js',
      )
      mockExists(true)
      const config = await readConfig()
      expect(config.server).toBeDefined()
    })
  })

  describe('with default config path', () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = ''
    })

    it('should return custom config', async () => {
      mockExists(true)
      const config = await readConfig()
      expect(config.server).toBeDefined()
    })

    it('should return default config if not found', async () => {
      mockExists(false)
      const config = await readConfig()
      expect(config.server).not.toBeDefined()
    })

    it('should return default config with launch args', async () => {
      mockExists(false)
      process.env.CI = true
      const config = await readConfig()
      expect(config.launch.args).toEqual([
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
      ])
    })
  })
})
