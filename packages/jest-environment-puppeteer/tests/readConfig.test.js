import path from 'path'
import cwd from 'cwd'
// eslint-disable-next-line import/no-extraneous-dependencies
import pptrChromium from 'puppeteer'
// eslint-disable-next-line import/no-extraneous-dependencies
import pptrFirefox from 'puppeteer-firefox'
import { readConfig, getPuppeteer } from '../src/readConfig'

const DEFAULT_CONFIG_PATH = path.resolve(cwd(), 'jest-puppeteer.config.js')

function mockNonExistentConfig() {
  jest.mock(DEFAULT_CONFIG_PATH, () => null, {
    virtual: true,
  })
}

function mockReadPackageJSON() {
  jest.mock(
    path.resolve(cwd(), 'package.json'),
    () => ({
      jestPuppeteerConfig: {
        args: ['--no-sandbox'],
      },
    }),
    {
      virtual: true,
    },
  )
}

describe('getPuppeteer', () => {
  it('should return chromium when specified', async () => {
    expect(
      getPuppeteer({
        browser: 'Chromium',
      }),
    ).toBe(pptrChromium)
  })
  it('should return firefox when specified', async () => {
    expect(
      getPuppeteer({
        browser: 'Firefox',
      }),
    ).toBe(pptrFirefox)
  })
})

describe('readConfig', () => {
  describe('with custom config path', () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = 'nop.js'
    })

    it('should return an error if not found', async () => {
      process.env.JEST_PUPPETEER_CONFIG = 'nop.js'
      expect.assertions(1)
      try {
        await readConfig()
      } catch (error) {
        expect(error.message).toBe(
          'Error: Can\'t resolve configuration.\nProvided path to resolve a config file path: nop.js\nOr "jestPuppeteerConfig" in your package.json file.',
        )
      }
    })

    it('should return custom config', async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        '__fixtures__/customConfig.js',
      )
      const config = await readConfig()
      expect(config.server).toBeDefined()
    })
  })

  describe('with default config path', () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = ''
      process.env.CI = false
      jest.unmock(DEFAULT_CONFIG_PATH)
    })

    it('should return custom config', async () => {
      const config = await readConfig()
      expect(config.server).toBeDefined()
    })

    it('should return default config if not found', async () => {
      mockNonExistentConfig()
      const config = await readConfig()
      expect(config.server).not.toBeDefined()
    })

    it('should return only CI default config with launch args', async () => {
      mockNonExistentConfig()
      process.env.CI = true
      const config = await readConfig()
      expect(config.launch.args).toEqual([
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
      ])
      expect(config.server).not.toBeDefined()
    })

    it('should return CI default config merged with custom args', async () => {
      process.env.CI = true
      const config = await readConfig()
      expect(config.launch.args).toEqual([
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
      ])
      expect(config.server).toBeDefined()
    })
  })

  describe('with Promise returning config', () => {
    it('should return async config', async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        '__fixtures__/promiseConfig.js',
      )
      const config = await readConfig()
      expect(config.server).toBeDefined()
    })
  })

  describe('with package.json config', () => {
    beforeAll(() => {
      mockReadPackageJSON()
    })

    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = ''
      jest.unmock(DEFAULT_CONFIG_PATH)
    })

    it('should return package.json config', async () => {
      mockNonExistentConfig()
      const config = await readConfig()
      expect(config.args).toMatchObject(['--no-sandbox'])
    })

    it('should be overridden by custom config', async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        '__fixtures__/promiseConfig.js',
      )
      const config = await readConfig()
      expect(config.server).toBeDefined()
    })
  })
})
