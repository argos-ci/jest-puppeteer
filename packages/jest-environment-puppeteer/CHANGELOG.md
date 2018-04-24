# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.4.0"></a>
# [2.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v2.3.0...v2.4.0) (2018-04-24)


### Features

* adjust default timeout with slowMo ([6871ec8](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/6871ec8)), closes [#36](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/36)
* **jest-environment-puppeteer:** add server.launchTimeout & server.debug options ([e312717](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/e312717)), closes [#44](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/44)
* **jest-environment-puppeteer:** added config option for global err msg ([#35](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/35)) ([d87c99a](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/d87c99a)), closes [#34](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/34)




<a name="2.3.0"></a>
# [2.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v2.2.3...v2.3.0) (2018-04-06)


### Features

* **jest-environment-puppeteer:** support custom config ([6cd3050](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/6cd3050)), closes [#19](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/19)




<a name="2.2.3"></a>
## [2.2.3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v2.2.2...v2.2.3) (2018-04-03)


### Bug Fixes

* support `ignoreHTTPSErrors` launch option ([ed60439](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/ed60439))




<a name="2.2.2"></a>
## [2.2.2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v2.2.1...v2.2.2) (2018-04-01)


### Bug Fixes

* **jest-environment-puppeteer:** support slowMo ([0fd5b19](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/0fd5b19)), closes [#20](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/20)




<a name="2.0.0"></a>
# [2.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v1.1.1...v2.0.0) (2018-03-05)


### Features

* integrate server launch ([dbea571](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/dbea571))
* simplify expect usage ([e0fc3d1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/e0fc3d1))


### BREAKING CHANGES

* `expectPage()` is replaced by `expect(page)`
* Puppeteer launch options are now specified under `launch` object




<a name="1.1.1"></a>
## [1.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v1.1.0...v1.1.1) (2018-03-04)


### Bug Fixes

* **expect-puppeteer:** add all sources in pkg ([bb51870](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/bb51870))




<a name="1.1.0"></a>
# [1.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v1.0.1...v1.1.0) (2018-03-04)


### Features

* add jest-puppeteer-preset ([7fbb273](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/7fbb273))
* add spawnd & expect-puppeteer ([6b7f5a4](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/6b7f5a4))
