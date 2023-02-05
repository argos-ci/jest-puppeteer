import {
  getDefaultOptions,
  setDefaultOptions,
  defaultOptions,
} from "./options";

describe("options", () => {
  it("should get and set default options", () => {
    expect(getDefaultOptions()).toEqual({ timeout: 500 });
    setDefaultOptions({ timeout: 200 });
    expect(getDefaultOptions()).toEqual({ timeout: 200 });

    // Default options
    expect(defaultOptions({})).toEqual({ timeout: 200 });
    expect(defaultOptions({ timeout: 300 })).toEqual({ timeout: 300 });
  });
});
