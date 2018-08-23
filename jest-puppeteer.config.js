const TEST_SERVER_PORT = process.env.TEST_SERVER_PORT
  ? parseInt(process.env.TEST_SERVER_PORT, 10) : 4444

process.env.TEST_SERVER_PORT = TEST_SERVER_PORT

module.exports = {
  launch: {
    headless: process.env.CI === 'true',
  },
  server: {
    command: `node server ${TEST_SERVER_PORT}`,
    port: TEST_SERVER_PORT,
    launchTimeout: 4000,
  },
}
