# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
