const port = process.env.TEST_SERVER_PORT
  ? Number(process.env.TEST_SERVER_PORT)
  : 4444;

process.env.TEST_SERVER_PORT = port;

module.exports = {
  launch: {
    headless: process.env.CI === "true",
  },
  browserContext: process.env.INCOGNITO ? "incognito" : "default",
  server: {
    command: `cross-env PORT=${port} node server`,
    port,
    launchTimeout: 4000,
  },
};
