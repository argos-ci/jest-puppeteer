import * as path from "node:path";
import { readConfig } from "../src/config";

// import globals
import "jest-puppeteer";

// This test does not run on Node.js < v20 (segfault)
describe("readConfig", () => {
  describe("with custom config path", () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = "nop.js";
    });

    it("should return an error if not found", async () => {
      process.env.JEST_PUPPETEER_CONFIG = "nop.js";
      expect.assertions(1);
      try {
        await readConfig();
      } catch (error: unknown) {
        const e = error as Error;
        expect(e.message).toMatch("ENOENT");
      }
    });

    it("should return custom config", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/customConfig.js",
      );
      const config = await readConfig();
      expect(config.server).toBeDefined();
    });
  });

  describe("with default config path", () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = "";
    });

    it("should return custom config", async () => {
      const config = await readConfig();
      expect(config.server).toBeDefined();
    });

    it("should return default config if not found", async () => {
      const config = await readConfig("/");
      expect(config.server).not.toBeDefined();
    });

    it("should return default config with launch args", async () => {
      process.env.CI = "true";
      const config = await readConfig("/");
      expect(config?.launch?.args).toEqual([
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-renderer-backgrounding",
      ]);
    });
  });

  describe("with Promise returning config", () => {
    it("should return async config", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/promiseConfig.js",
      );
      const config = await readConfig();
      expect(config.server).toBeDefined();
    });
  });

  describe("with custom browser type", () => {
    it("should return an error if invalid browser", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/invalidProduct.js",
      );
      try {
        await readConfig();
      } catch (error: unknown) {
        const e = error as Error;
        expect(e.message).toBe("Error: Invalid browser value 'foobar'");
      }
    });
  });

  describe("with browser config", () => {
    it("should set launch.browser", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/browserConfig.js",
      );
      const config = await readConfig();
      expect(config?.launch?.browser).toBe("firefox");
    });
  });
});
