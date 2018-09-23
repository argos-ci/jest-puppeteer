module.exports = {
  launch: {
    headless: process.env.CI === 'true',
  },
  server: {
    command: 'node server',
    port: 4444,
    launchTimeout: 4000,
  },
}
