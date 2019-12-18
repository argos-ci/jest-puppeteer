# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v4.3.0...v4.4.0) (2019-12-18)


### Bug Fixes

* fixes --watch mode server start&restarts ([#299](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/299)) ([d49a6a1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/d49a6a127cf636ef398609f565dff5f537c80532))
* only call setRawMode if stdin is TTY ([#301](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/301)) ([61d04c7](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/61d04c7e54908c2d662152cc0840b121742437fb))
* teardown browser in watch mode. ([#270](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/270)) ([04de87a](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/04de87ae34c2b4be65d0a18e89252304b21d6255))





# [4.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v4.2.0...v4.3.0) (2019-07-14)


### Features

* add jestPuppeteer.resetBrowser method ([#237](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/237)) ([ae93739](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/ae93739))





# [4.2.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v4.1.1...v4.2.0) (2019-05-28)


### Features

* support "browser" config option ([#220](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/220)) ([85a1122](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/85a1122)), closes [#171](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/171)





## [4.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v4.1.0...v4.1.1) (2019-04-11)

**Note:** Version bump only for package jest-environment-puppeteer





# [4.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v4.0.0...v4.1.0) (2019-03-14)


### Bug Fixes

* invalid connect options, when using browserURL ([#212](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/212)) ([6e483e6](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/6e483e6))





# [4.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.9.0...v4.0.0) (2019-02-13)


### Bug Fixes

* Cannot read property watch of undefined in jest v22 version ([#197](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/197)) ([db731a3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/db731a3))





# [3.9.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.8.0...v3.9.0) (2019-01-22)


### Bug Fixes

* jest --watch fails to reload ([#182](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/182)) ([cc9bbfa](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/cc9bbfa))
* wrong timeout when using jestPuppeteer.debug() ([#185](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/185)) ([0f4c720](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/0f4c720))


### Features

* add jestPuppeteer.resetPage ([#183](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/183)) ([3a5526c](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/3a5526c))





# [3.8.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.7.0...v3.8.0) (2019-01-11)


### Bug Fixes

* disconnect the browser on environment teardown ([#173](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/173)) ([5d073cc](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/5d073cc))


### Features

* **jest-environment-puppeteer:** accept a promise as config ([#178](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/178)) ([40bc3a2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/40bc3a2))





# [3.7.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.6.0...v3.7.0) (2018-12-11)

**Note:** Version bump only for package jest-environment-puppeteer





# [3.6.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.5.2...v3.6.0) (2018-12-06)


### Bug Fixes

* skip closing external browser on teardown ([0505b2c](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/0505b2c))
* use browser.disconnect method ([7afbb2e](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/7afbb2e))





## [3.5.2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.5.1...v3.5.2) (2018-11-27)

**Note:** Version bump only for package jest-environment-puppeteer





## [3.5.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.5.0...v3.5.1) (2018-11-11)

**Note:** Version bump only for package jest-environment-puppeteer





# [3.5.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.4.0...v3.5.0) (2018-11-04)


### Features

* add incognito context support ([#140](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/140)) ([5b8983a](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/5b8983a)), closes [#133](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/133)
* disable tab throttling ([#144](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/144)) ([b92e76c](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/b92e76c)), closes [#137](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/137)


### Performance Improvements

* remove lodash dependency ([#143](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/143)) ([0cf7109](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/0cf7109))





<a name="3.4.0"></a>
# [3.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.3.1...v3.4.0) (2018-09-24)


### Bug Fixes

* support several instances of Jest in parallel ([#138](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/138)) ([275bc71](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/275bc71))


### Features

* connect to an already existing instance of Chrome ([#100](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/100)) ([3fcbaf8](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/3fcbaf8))





<a name="3.3.1"></a>
## [3.3.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.3.0...v3.3.1) (2018-08-17)


### Bug Fixes

* revert pid based endpoint file ([4a08847](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/4a08847)), closes [#103](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/103)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.2.1...v3.3.0) (2018-08-15)


### Features

* add support for defaultViewport option ([7b484a8](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/7b484a8))
* support multiple processes on same machine ([#103](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/103)) ([4d37d17](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/4d37d17))





<a name="3.2.1"></a>
## [3.2.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.2.0...v3.2.1) (2018-06-17)


### Bug Fixes

* fix debug mode ([7e395a3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/7e395a3))




<a name="3.2.0"></a>
# [3.2.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.1.0...v3.2.0) (2018-06-17)


### Features

* add debug mode ([4f79768](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/4f79768))




<a name="3.1.0"></a>
# [3.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/compare/v3.0.1...v3.1.0) (2018-06-16)


### Features

* **jest-dev-server:** externalize it & auto-kill ([45e8fbb](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/commit/45e8fbb)), closes [#66](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/66) [#68](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer/issues/68)




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
