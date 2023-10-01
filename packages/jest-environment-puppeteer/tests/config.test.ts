import * as path from "node:path";
import { readConfig } from "../src/config";

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
      } catch (error: any) {
        expect(error.message).toMatch("ENOENT");
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

  describe("with custom product type", () => {
    it("should return an error if invalid product", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/invalidProduct.js",
      );
      try {
        await readConfig();
      } catch (error: any) {
        expect(error.message).toBe("Error: Invalid product value 'foobar'");
      }
    });
  });

  describe("with browser config", () => {
    it("should set launch.product", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/browserConfig.js",
      );
      const config = await readConfig();
      expect(config?.launch?.product).toBe("firefox");
    });
  });
});
