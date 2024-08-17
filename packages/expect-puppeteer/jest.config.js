module.exports = {
  preset: "<rootDir>/../jest-puppeteer",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
