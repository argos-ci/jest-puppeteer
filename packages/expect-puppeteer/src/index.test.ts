import { getDefaultOptions, setDefaultOptions } from "expect-puppeteer";

// import globals
import "jest-puppeteer";

expect.addSnapshotSerializer({
  print: () => "hello",
  test: () => true,
  serialize: () => "hello",
});

describe("expect-puppeteer", () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}`);
  });

  it("should work with original Jest matchers", async () => {
    expect(page).toBeDefined();
    expect(page).not.toBe(null);

    const main = await page.$("main");
    expect(main).toBeDefined();
    expect(main).not.toBe(null);

    expect(200).toBe(200);
  });

  it("should works with `addSnapshotSerializer`", () => {
    expect({ hello: "world" }).toMatchSnapshot();
  });

  it("should get and set default options", () => {
    expect(getDefaultOptions()).toEqual({ timeout: 500 });
    setDefaultOptions({ timeout: 200 });
    expect(getDefaultOptions()).toEqual({ timeout: 200 });
  });
});
