module.exports = require('./lib/PuppeteerEnvironment').default
module.exports.globalSetup = require('./lib/global').setup
module.exports.globalTeardown = require('./lib/global').teardown
