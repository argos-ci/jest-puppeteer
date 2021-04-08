# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.4.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.3.0...v4.4.0) (2019-12-18)


### Bug Fixes

* fix toDisplayDialog ([ce9df04](https://github.com/smooth-code/jest-puppeteer/commit/ce9df04642720a6af23e9b25f1b341bc82eca564))
* fixes --watch mode server start&restarts ([#299](https://github.com/smooth-code/jest-puppeteer/issues/299)) ([d49a6a1](https://github.com/smooth-code/jest-puppeteer/commit/d49a6a127cf636ef398609f565dff5f537c80532))
* only call setRawMode if stdin is TTY ([#301](https://github.com/smooth-code/jest-puppeteer/issues/301)) ([61d04c7](https://github.com/smooth-code/jest-puppeteer/commit/61d04c7e54908c2d662152cc0840b121742437fb))
* teardown browser in watch mode. ([#270](https://github.com/smooth-code/jest-puppeteer/issues/270)) ([04de87a](https://github.com/smooth-code/jest-puppeteer/commit/04de87ae34c2b4be65d0a18e89252304b21d6255))


### Features

* increase peerDependencies to allow Puppeteer v2 ([#289](https://github.com/smooth-code/jest-puppeteer/issues/289)) ([62a9b81](https://github.com/smooth-code/jest-puppeteer/commit/62a9b819cebf67d7e7b36453b79fba06390585ca))
* **expect-puppeteer:** support frames ([#275](https://github.com/smooth-code/jest-puppeteer/issues/275)) ([09703ea](https://github.com/smooth-code/jest-puppeteer/commit/09703eaeeeab553e13142153b55030db05611f7c))





# [4.3.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.2.0...v4.3.0) (2019-07-14)


### Bug Fixes

* use host in port check ([#222](https://github.com/smooth-code/jest-puppeteer/issues/222)) ([e419eb2](https://github.com/smooth-code/jest-puppeteer/commit/e419eb2))


### Features

* add jestPuppeteer.resetBrowser method ([#237](https://github.com/smooth-code/jest-puppeteer/issues/237)) ([ae93739](https://github.com/smooth-code/jest-puppeteer/commit/ae93739))





# [4.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.1.1...v4.2.0) (2019-05-28)


### Bug Fixes

* jest-dev-server can't detect used ports ([#235](https://github.com/smooth-code/jest-puppeteer/issues/235)) ([8b64c10](https://github.com/smooth-code/jest-puppeteer/commit/8b64c10))


### Features

* add waitOnScheme options ([#232](https://github.com/smooth-code/jest-puppeteer/issues/232)) ([f772d74](https://github.com/smooth-code/jest-puppeteer/commit/f772d74))
* support "browser" config option ([#220](https://github.com/smooth-code/jest-puppeteer/issues/220)) ([85a1122](https://github.com/smooth-code/jest-puppeteer/commit/85a1122)), closes [#171](https://github.com/smooth-code/jest-puppeteer/issues/171)





## [4.1.1](https://github.com/smooth-code/jest-puppeteer/compare/v4.1.0...v4.1.1) (2019-04-11)


### Bug Fixes

* do not attempt to start the server when `usedPortAction` is `ignore` and `isPortTaken` is `true` ([#219](https://github.com/smooth-code/jest-puppeteer/issues/219)) ([7df3721](https://github.com/smooth-code/jest-puppeteer/commit/7df3721))





# [4.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.0.0...v4.1.0) (2019-03-14)


### Bug Fixes

* invalid connect options, when using browserURL ([#212](https://github.com/smooth-code/jest-puppeteer/issues/212)) ([6e483e6](https://github.com/smooth-code/jest-puppeteer/commit/6e483e6))


### Features

* **expect-puppeteer:** add visibility option to toMatchElement ([#208](https://github.com/smooth-code/jest-puppeteer/issues/208)) ([46d8ec1](https://github.com/smooth-code/jest-puppeteer/commit/46d8ec1))





# [4.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.9.0...v4.0.0) (2019-02-13)


### Bug Fixes

* Cannot read property watch of undefined in jest v22 version ([#197](https://github.com/smooth-code/jest-puppeteer/issues/197)) ([db731a3](https://github.com/smooth-code/jest-puppeteer/commit/db731a3))


### Features

* support jest v24 ([#196](https://github.com/smooth-code/jest-puppeteer/issues/196)) ([dbcc9d0](https://github.com/smooth-code/jest-puppeteer/commit/dbcc9d0))


### BREAKING CHANGES

* v4.x is only compatible with Jest v24, use v3.x with Jest v23.





# [3.9.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.8.0...v3.9.0) (2019-01-22)


### Bug Fixes

* jest --watch fails to reload ([#182](https://github.com/smooth-code/jest-puppeteer/issues/182)) ([cc9bbfa](https://github.com/smooth-code/jest-puppeteer/commit/cc9bbfa))
* wrong timeout when using jestPuppeteer.debug() ([#185](https://github.com/smooth-code/jest-puppeteer/issues/185)) ([0f4c720](https://github.com/smooth-code/jest-puppeteer/commit/0f4c720))


### Features

* add jestPuppeteer.resetPage ([#183](https://github.com/smooth-code/jest-puppeteer/issues/183)) ([3a5526c](https://github.com/smooth-code/jest-puppeteer/commit/3a5526c))





# [3.8.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.7.0...v3.8.0) (2019-01-11)


### Bug Fixes

* disconnect the browser on environment teardown ([#173](https://github.com/smooth-code/jest-puppeteer/issues/173)) ([5d073cc](https://github.com/smooth-code/jest-puppeteer/commit/5d073cc))


### Features

* **jest-environment-puppeteer:** accept a promise as config ([#178](https://github.com/smooth-code/jest-puppeteer/issues/178)) ([40bc3a2](https://github.com/smooth-code/jest-puppeteer/commit/40bc3a2))





# [3.7.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.6.0...v3.7.0) (2018-12-11)


### Features

* **jest-dev-server:** expose servers ([#166](https://github.com/smooth-code/jest-puppeteer/issues/166)) ([be650a3](https://github.com/smooth-code/jest-puppeteer/commit/be650a3)), closes [#135](https://github.com/smooth-code/jest-puppeteer/issues/135)
* use tree-kill instead of terminate ([#169](https://github.com/smooth-code/jest-puppeteer/issues/169)) ([bb2e27b](https://github.com/smooth-code/jest-puppeteer/commit/bb2e27b))





# [3.6.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.5.2...v3.6.0) (2018-12-06)


### Bug Fixes

* skip closing external browser on teardown ([0505b2c](https://github.com/smooth-code/jest-puppeteer/commit/0505b2c))
* use browser.disconnect method ([7afbb2e](https://github.com/smooth-code/jest-puppeteer/commit/7afbb2e))


### Features

* **jest-dev-server:** support multiple servers ([#163](https://github.com/smooth-code/jest-puppeteer/issues/163)) ([6cf690c](https://github.com/smooth-code/jest-puppeteer/commit/6cf690c))





## [3.5.2](https://github.com/smooth-code/jest-puppeteer/compare/v3.5.1...v3.5.2) (2018-11-27)


### Bug Fixes

* **security:** upgrade dependencies ([e913425](https://github.com/smooth-code/jest-puppeteer/commit/e913425))
* **security:** upgrade terminate ([#158](https://github.com/smooth-code/jest-puppeteer/issues/158)) ([06fd89e](https://github.com/smooth-code/jest-puppeteer/commit/06fd89e))





## [3.5.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.5.0...v3.5.1) (2018-11-11)


### Bug Fixes

* avoid prompting for super user login (as possible) ([#149](https://github.com/smooth-code/jest-puppeteer/issues/149)) ([1701e9b](https://github.com/smooth-code/jest-puppeteer/commit/1701e9b))





# [3.5.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.4.0...v3.5.0) (2018-11-04)


### Bug Fixes

* **jest-dev-server:** do not require port to run server ([5aee5fe](https://github.com/smooth-code/jest-puppeteer/commit/5aee5fe)), closes [#146](https://github.com/smooth-code/jest-puppeteer/issues/146)
* **jest-dev-server:** do not scan process if usedPortAction is "ignore" ([cceb0bd](https://github.com/smooth-code/jest-puppeteer/commit/cceb0bd)), closes [#96](https://github.com/smooth-code/jest-puppeteer/issues/96)


### Features

* add incognito context support ([#140](https://github.com/smooth-code/jest-puppeteer/issues/140)) ([5b8983a](https://github.com/smooth-code/jest-puppeteer/commit/5b8983a)), closes [#133](https://github.com/smooth-code/jest-puppeteer/issues/133)
* disable tab throttling ([#144](https://github.com/smooth-code/jest-puppeteer/issues/144)) ([b92e76c](https://github.com/smooth-code/jest-puppeteer/commit/b92e76c)), closes [#137](https://github.com/smooth-code/jest-puppeteer/issues/137)


### Performance Improvements

* remove lodash dependency ([#143](https://github.com/smooth-code/jest-puppeteer/issues/143)) ([0cf7109](https://github.com/smooth-code/jest-puppeteer/commit/0cf7109))





<a name="3.4.0"></a>
# [3.4.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.3.1...v3.4.0) (2018-09-24)


### Bug Fixes

* support several instances of Jest in parallel ([#138](https://github.com/smooth-code/jest-puppeteer/issues/138)) ([275bc71](https://github.com/smooth-code/jest-puppeteer/commit/275bc71))


### Features

* **expect-puppeteer:** Update default options to look at connect object ([1f33ea0](https://github.com/smooth-code/jest-puppeteer/commit/1f33ea0))
* **jest-environment-puppeteer:** Add ability to connect to an already existing instance of Chrome ([9de05f0](https://github.com/smooth-code/jest-puppeteer/commit/9de05f0))
* **jest-environment-puppeteer:** Add documentation of new `connect `options ([c6b0613](https://github.com/smooth-code/jest-puppeteer/commit/c6b0613))
* **jest-environment-puppeteer:** Remove unneeded async config ([30a3daa](https://github.com/smooth-code/jest-puppeteer/commit/30a3daa))
* **jest-environment-puppeteer:** Simplify getBrowser function ([8ccb0d0](https://github.com/smooth-code/jest-puppeteer/commit/8ccb0d0))





<a name="3.3.1"></a>
## [3.3.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.3.0...v3.3.1) (2018-08-17)


### Bug Fixes

* revert pid based endpoint file ([4a08847](https://github.com/smooth-code/jest-puppeteer/commit/4a08847)), closes [#103](https://github.com/smooth-code/jest-puppeteer/issues/103)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.2.1...v3.3.0) (2018-08-15)


### Bug Fixes

* **jest-dev-server:** support for port being held by System Idle Process ([#95](https://github.com/smooth-code/jest-puppeteer/issues/95)) ([e454973](https://github.com/smooth-code/jest-puppeteer/commit/e454973))


### Features

* **jest-dev-server:** add support for protocol & host ([#93](https://github.com/smooth-code/jest-puppeteer/issues/93)) ([5dca53b](https://github.com/smooth-code/jest-puppeteer/commit/5dca53b))
* add support for defaultViewport option ([7b484a8](https://github.com/smooth-code/jest-puppeteer/commit/7b484a8))
* support multiple processes on same machine ([#103](https://github.com/smooth-code/jest-puppeteer/issues/103)) ([4d37d17](https://github.com/smooth-code/jest-puppeteer/commit/4d37d17))





<a name="3.2.1"></a>
## [3.2.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.2.0...v3.2.1) (2018-06-17)


### Bug Fixes

* fix debug mode ([7e395a3](https://github.com/smooth-code/jest-puppeteer/commit/7e395a3))




<a name="3.2.0"></a>
# [3.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.1.0...v3.2.0) (2018-06-17)


### Bug Fixes

* **jest-dev-server:** fix watch mode stdin after ask ([a7ca57b](https://github.com/smooth-code/jest-puppeteer/commit/a7ca57b))


### Features

* add debug mode ([4f79768](https://github.com/smooth-code/jest-puppeteer/commit/4f79768))




<a name="3.1.0"></a>
# [3.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.0.1...v3.1.0) (2018-06-16)


### Features

* **jest-dev-server:** externalize it & auto-kill ([45e8fbb](https://github.com/smooth-code/jest-puppeteer/commit/45e8fbb)), closes [#66](https://github.com/smooth-code/jest-puppeteer/issues/66) [#68](https://github.com/smooth-code/jest-puppeteer/issues/68)




<a name="3.0.1"></a>
## [3.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.0.0...v3.0.1) (2018-05-03)


### Bug Fixes

* **expect-puppeteer:** use the same behaviour on toMatch and toMatchElement ([784bde8](https://github.com/smooth-code/jest-puppeteer/commit/784bde8))




<a name="3.0.0"></a>
# [3.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.4.0...v3.0.0) (2018-05-03)


### Features

* **expect-puppeteer:** added delay option to element.type for toFill matcher ([#52](https://github.com/smooth-code/jest-puppeteer/issues/52)) ([ee39ba9](https://github.com/smooth-code/jest-puppeteer/commit/ee39ba9))
* **expect-puppeteer:** enhance toMatchElement / toClick text option ([cee8f46](https://github.com/smooth-code/jest-puppeteer/commit/cee8f46)), closes [#51](https://github.com/smooth-code/jest-puppeteer/issues/51) [#50](https://github.com/smooth-code/jest-puppeteer/issues/50)


### BREAKING CHANGES

* **expect-puppeteer:** Text is now trimmed and no longer evaluated as a RegExp. If you want this behaviour, use a true RegExp.




<a name="2.4.0"></a>
# [2.4.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.3.0...v2.4.0) (2018-04-24)


### Features

* **expect-puppeteer:** keep original error message ([#45](https://github.com/smooth-code/jest-puppeteer/issues/45)) ([72b60a9](https://github.com/smooth-code/jest-puppeteer/commit/72b60a9)), closes [#33](https://github.com/smooth-code/jest-puppeteer/issues/33)
* **expect-puppeteer:** make default options configurable ([#46](https://github.com/smooth-code/jest-puppeteer/issues/46)) ([0d493c4](https://github.com/smooth-code/jest-puppeteer/commit/0d493c4))
* adjust default timeout with slowMo ([6871ec8](https://github.com/smooth-code/jest-puppeteer/commit/6871ec8)), closes [#36](https://github.com/smooth-code/jest-puppeteer/issues/36)
* **jest-environment-puppeteer:** add server.launchTimeout & server.debug options ([e312717](https://github.com/smooth-code/jest-puppeteer/commit/e312717)), closes [#44](https://github.com/smooth-code/jest-puppeteer/issues/44)
* **jest-environment-puppeteer:** added config option for global err msg ([#35](https://github.com/smooth-code/jest-puppeteer/issues/35)) ([d87c99a](https://github.com/smooth-code/jest-puppeteer/commit/d87c99a)), closes [#34](https://github.com/smooth-code/jest-puppeteer/issues/34)




<a name="2.3.0"></a>
# [2.3.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.3...v2.3.0) (2018-04-06)


### Features

* **jest-environment-puppeteer:** support custom config ([6cd3050](https://github.com/smooth-code/jest-puppeteer/commit/6cd3050)), closes [#19](https://github.com/smooth-code/jest-puppeteer/issues/19)




<a name="2.2.3"></a>
## [2.2.3](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.2...v2.2.3) (2018-04-03)


### Bug Fixes

* support `ignoreHTTPSErrors` launch option ([ed60439](https://github.com/smooth-code/jest-puppeteer/commit/ed60439))




<a name="2.2.2"></a>
## [2.2.2](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.1...v2.2.2) (2018-04-01)


### Bug Fixes

* **expect-puppeteer:** reduce chance of collision ([83ade43](https://github.com/smooth-code/jest-puppeteer/commit/83ade43)), closes [#issuecomment-377698539](https://github.com/smooth-code/jest-puppeteer/issues/issuecomment-377698539)
* **jest-environment-puppeteer:** support slowMo ([0fd5b19](https://github.com/smooth-code/jest-puppeteer/commit/0fd5b19)), closes [#20](https://github.com/smooth-code/jest-puppeteer/issues/20)




<a name="2.2.1"></a>
## [2.2.1](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.0...v2.2.1) (2018-03-25)


### Bug Fixes

* support original Jest matchers ([99d542e](https://github.com/smooth-code/jest-puppeteer/commit/99d542e)), closes [#17](https://github.com/smooth-code/jest-puppeteer/issues/17)




<a name="2.2.0"></a>
# [2.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.1.0...v2.2.0) (2018-03-17)


### Features

* add jest-puppeteer pkg ([48289c8](https://github.com/smooth-code/jest-puppeteer/commit/48289c8))




<a name="2.1.0"></a>
# [2.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.0.1...v2.1.0) (2018-03-16)


### Features

* add element handle support ([4d37d5b](https://github.com/smooth-code/jest-puppeteer/commit/4d37d5b))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v2.0.0...v2.0.1) (2018-03-08)


### Bug Fixes

* **expect-puppeteer:** fix expectMatch when body is undefined ([#9](https://github.com/smooth-code/jest-puppeteer/issues/9)) ([0c60970](https://github.com/smooth-code/jest-puppeteer/commit/0c60970))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v1.1.1...v2.0.0) (2018-03-05)


### Bug Fixes

* add missing await to README ([cb11763](https://github.com/smooth-code/jest-puppeteer/commit/cb11763))


### Features

* integrate server launch ([dbea571](https://github.com/smooth-code/jest-puppeteer/commit/dbea571))
* simplify expect usage ([e0fc3d1](https://github.com/smooth-code/jest-puppeteer/commit/e0fc3d1))


### BREAKING CHANGES

* `expectPage()` is replaced by `expect(page)`
* Puppeteer launch options are now specified under `launch` object




<a name="1.1.1"></a>
## [1.1.1](https://github.com/smooth-code/jest-puppeteer/compare/v1.1.0...v1.1.1) (2018-03-04)


### Bug Fixes

* **expect-puppeteer:** add all sources in pkg ([bb51870](https://github.com/smooth-code/jest-puppeteer/commit/bb51870))




<a name="1.1.0"></a>
## [1.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v1.0.1...v1.1.0) (2018-03-04)


### Features

* add jest-puppeteer-preset ([7fbb273](https://github.com/smooth-code/jest-puppeteer/commit/7fbb273))
* add spawnd & expect-puppeteer ([6b7f5a4](https://github.com/smooth-code/jest-puppeteer/commit/6b7f5a4))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v1.0.0...v1.0.1) (2018-03-03)

Move to Lerna.

<a name="1.0.0"></a>

## [1.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v0.2.0...v1.0.0) (2018-03-03)

### feta

* simplify API

### BREAKING CHANGES

* * `mainPage` is renamed into `page`

- "/globalSetup" => "/setup"
- "/globalTeardown" => "/teardown"
- "/testEnvironment" => ""

<a name="0.2.0"></a>

## [0.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v0.1.0...v0.2.0) (2018-03-03)

### Features

* support Puppeteer configuration

<a name="0.1.0"></a>

## 0.1.0 (2018-03-02)

### Features

* first version 🎉
