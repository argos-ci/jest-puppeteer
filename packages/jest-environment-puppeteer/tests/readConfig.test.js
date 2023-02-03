import fs from "fs";
import path from "path";
import { readConfig } from "../src/readConfig";

jest.mock("fs");

function mockExists(value) {
  fs.exists.mockImplementation((path, callback) => callback(null, value));
}

describe("readConfig", () => {
  describe("with custom config path", () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = "nop.js";
    });

    it("should return an error if not found", async () => {
      process.env.JEST_PUPPETEER_CONFIG = "nop.js";
      expect.assertions(1);
      mockExists(false);
      try {
        await readConfig();
      } catch (error) {
        expect(error.message).toBe(
          "Error: Can't find a root directory while resolving a config file path.\nProvided path to resolve: nop.js"
        );
      }
    });

    it("should return custom config", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/customConfig.js"
      );
      mockExists(true);
      const config = await readConfig();
      expect(config.server).toBeDefined();
    });
  });

  describe("with default config path", () => {
    beforeEach(() => {
      process.env.JEST_PUPPETEER_CONFIG = "";
    });

    it("should return custom config", async () => {
      mockExists(true);
      const config = await readConfig();
      expect(config.server).toBeDefined();
    });

    it("should return default config if not found", async () => {
      mockExists(false);
      const config = await readConfig();
      expect(config.server).not.toBeDefined();
    });

    it("should return default config with launch args", async () => {
      mockExists(false);
      process.env.CI = true;
      const config = await readConfig();
      expect(config.launch.args).toEqual([
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
        "__fixtures__/promiseConfig.js"
      );
      mockExists(true);
      const config = await readConfig();
      expect(config.server).toBeDefined();
    });
  });

  describe("with custom product type", () => {
    it("should return an error if invalid product", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/invalidProduct.js"
      );
      mockExists(true);
      try {
        await readConfig();
      } catch (error) {
        expect(error.message).toBe("Error: Invalid product value 'foobar'");
      }
    });
  });

  describe("with browser config", () => {
    beforeEach(() => {
      jest.spyOn(console, "warn").mockImplementation(() => {});
    });

    it("should set launch.product", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/browserConfig.js"
      );
      mockExists(true);
      const config = await readConfig();
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "`browser` config has been deprecated and will be removed in future versions. Use `launch.product` config with `chrome` or `firefox` instead."
      );
      expect(config.launch.product).toBe("firefox");
    });

    it("should set launch.product to chrome", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/browserConfigChromium.js"
      );
      mockExists(true);
      const config = await readConfig();
      expect(config.launch.product).toBe("chrome");
    });

    it("should not overwrite launch", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/browserLaunchConfig.js"
      );
      mockExists(true);
      const config = await readConfig();
      expect(config.launch.product).toBe("firefox");
      expect(config.launch.some).toBe("other property");
    });

    it("should not overwrite launch.product", async () => {
      process.env.JEST_PUPPETEER_CONFIG = path.resolve(
        __dirname,
        "__fixtures__/browserLaunchProductConfig.js"
      );
      mockExists(true);
      const config = await readConfig();
      expect(config.launch.product).toBe("chrome");
    });
  });
});
