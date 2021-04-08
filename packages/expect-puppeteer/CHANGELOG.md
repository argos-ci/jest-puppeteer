# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v4.3.0...v4.4.0) (2019-12-18)


### Bug Fixes

* fix toDisplayDialog ([ce9df04](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/ce9df04642720a6af23e9b25f1b341bc82eca564))


### Features

* increase peerDependencies to allow Puppeteer v2 ([#289](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/289)) ([62a9b81](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/62a9b819cebf67d7e7b36453b79fba06390585ca))
* **expect-puppeteer:** support frames ([#275](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/275)) ([09703ea](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/09703eaeeeab553e13142153b55030db05611f7c))





# [4.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v4.2.0...v4.3.0) (2019-07-14)

**Note:** Version bump only for package expect-puppeteer





## [4.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v4.1.0...v4.1.1) (2019-04-11)

**Note:** Version bump only for package expect-puppeteer





# [4.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v4.0.0...v4.1.0) (2019-03-14)


### Features

* **expect-puppeteer:** add visibility option to toMatchElement ([#208](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/208)) ([46d8ec1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/46d8ec1))





# [4.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.9.0...v4.0.0) (2019-02-13)

**Note:** Version bump only for package expect-puppeteer





## [3.5.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.5.0...v3.5.1) (2018-11-11)

**Note:** Version bump only for package expect-puppeteer





<a name="3.4.0"></a>
# [3.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.3.1...v3.4.0) (2018-09-24)


### Bug Fixes

* support several instances of Jest in parallel ([#138](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/138)) ([275bc71](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/275bc71))


### Features

* **expect-puppeteer:** Update default options to look at connect object ([1f33ea0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/1f33ea0))
* connect to an already existing instance of Chrome ([#100](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/100)) ([3fcbaf8](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/3fcbaf8))





<a name="3.3.0"></a>
# [3.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.2.1...v3.3.0) (2018-08-15)

**Note:** Version bump only for package expect-puppeteer





<a name="3.2.0"></a>
# [3.2.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.1.0...v3.2.0) (2018-06-17)




**Note:** Version bump only for package expect-puppeteer

<a name="3.1.0"></a>
# [3.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.0.1...v3.1.0) (2018-06-16)




**Note:** Version bump only for package expect-puppeteer

<a name="3.0.1"></a>
## [3.0.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v3.0.0...v3.0.1) (2018-05-03)


### Bug Fixes

* **expect-puppeteer:** use the same behaviour on toMatch and toMatchElement ([784bde8](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/784bde8))




<a name="3.0.0"></a>
# [3.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v2.4.0...v3.0.0) (2018-05-03)


### Features

* **expect-puppeteer:** added delay option to element.type for toFill matcher ([#52](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/52)) ([ee39ba9](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/ee39ba9))
* **expect-puppeteer:** enhance toMatchElement / toClick text option ([cee8f46](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/cee8f46)), closes [#51](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/51) [#50](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/50)


### BREAKING CHANGES

* **expect-puppeteer:** Text is now trimmed and no longer evaluated as a RegExp. If you want this behaviour, use a true RegExp.




<a name="2.4.0"></a>
# [2.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v2.3.0...v2.4.0) (2018-04-24)


### Features

* **expect-puppeteer:** keep original error message ([#45](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/45)) ([72b60a9](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/72b60a9)), closes [#33](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/33)
* **expect-puppeteer:** make default options configurable ([#46](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/46)) ([0d493c4](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/0d493c4))
* adjust default timeout with slowMo ([6871ec8](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/6871ec8)), closes [#36](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/36)




<a name="2.3.0"></a>
# [2.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v2.2.3...v2.3.0) (2018-04-06)




**Note:** Version bump only for package expect-puppeteer

<a name="2.2.2"></a>
## [2.2.2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v2.2.1...v2.2.2) (2018-04-01)


### Bug Fixes

* **expect-puppeteer:** reduce chance of collision ([83ade43](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/83ade43)), closes [#issuecomment-377698539](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/issuecomment-377698539)




<a name="2.2.1"></a>
## [2.2.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v2.2.0...v2.2.1) (2018-03-25)


### Bug Fixes

* support original Jest matchers ([99d542e](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/99d542e)), closes [#17](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/17)




<a name="2.2.0"></a>
# [2.2.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v2.1.0...v2.2.0) (2018-03-17)




**Note:** Version bump only for package expect-puppeteer

<a name="2.1.0"></a>
# [2.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/compare/v2.0.1...v2.1.0) (2018-03-16)


### Features

* add element handle support ([4d37d5b](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/commit/4d37d5b))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/compare/v2.0.0...v2.0.1) (2018-03-08)


### Bug Fixes

* **expect-puppeteer:** fix expectMatch when body is undefined ([#9](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/issues/9)) ([0c60970](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/commit/0c60970))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/compare/v1.1.1...v2.0.0) (2018-03-05)


### Features

* simplify expect usage ([e0fc3d1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/commit/e0fc3d1))


### BREAKING CHANGES

* `expectPage()` is replaced by `expect(page)`




<a name="1.1.1"></a>
## [1.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/compare/v1.1.0...v1.1.1) (2018-03-04)


### Bug Fixes

* **expect-puppeteer:** add all sources in pkg ([bb51870](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/commit/bb51870))




<a name="1.1.0"></a>
# [1.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/compare/v1.0.1...v1.1.0) (2018-03-04)


### Features

* add spawnd & expect-puppeteer ([6b7f5a4](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/puppeteer-expect/commit/6b7f5a4))
