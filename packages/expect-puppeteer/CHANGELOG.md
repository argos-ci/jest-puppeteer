# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.1.4](https://github.com/argos-ci/jest-puppeteer/compare/v10.1.3...v10.1.4) (2024-10-26)


### Bug Fixes

* revert types resolution from `@jest/globals` ([#604](https://github.com/argos-ci/jest-puppeteer/issues/604)) ([4bc420b](https://github.com/argos-ci/jest-puppeteer/commit/4bc420b3568140d893e5b98c383111cbb3028720))





## [10.1.3](https://github.com/argos-ci/jest-puppeteer/compare/v10.1.2...v10.1.3) (2024-10-22)


### Bug Fixes

* fix types resolution when importing jest types from @jest/globals ([#602](https://github.com/argos-ci/jest-puppeteer/issues/602)) ([e5b2e1a](https://github.com/argos-ci/jest-puppeteer/commit/e5b2e1a7c0282aba496ffe2806201778b84a96fc))





## [10.1.2](https://github.com/argos-ci/jest-puppeteer/compare/v10.1.1...v10.1.2) (2024-10-10)


### Bug Fixes

* fix types resolution for expect-puppeteer ([#599](https://github.com/argos-ci/jest-puppeteer/issues/599)) ([37e3271](https://github.com/argos-ci/jest-puppeteer/commit/37e3271c64a59e8314b4f96078516b2515c84493))





## [10.1.1](https://github.com/argos-ci/jest-puppeteer/compare/v10.1.0...v10.1.1) (2024-09-06)

**Note:** Version bump only for package expect-puppeteer





# [10.1.0](https://github.com/argos-ci/jest-puppeteer/compare/v10.0.1...v10.1.0) (2024-08-17)


### Features

* support puppeteer v23 ([b5e774d](https://github.com/argos-ci/jest-puppeteer/commit/b5e774d95f585f34d8f1ce1a043777163b5cb673)), closes [#586](https://github.com/argos-ci/jest-puppeteer/issues/586)





# [10.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.2...v10.0.0) (2024-02-10)


### Features

* add Puppeteer v22 compatibility ([#576](https://github.com/argos-ci/jest-puppeteer/issues/576)) ([6d7a02f](https://github.com/argos-ci/jest-puppeteer/commit/6d7a02fd5561f4ca1c9d52e2c8559df8f1c2d83f))


### BREAKING CHANGES

* Drop Node.js v16 support.





## [9.0.2](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.1...v9.0.2) (2023-12-06)

**Note:** Version bump only for package expect-puppeteer





## [9.0.1](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.0...v9.0.1) (2023-10-01)


### Bug Fixes

* fix compatibility with Puppeteer v21 ([#566](https://github.com/argos-ci/jest-puppeteer/issues/566)) ([5cfee1f](https://github.com/argos-ci/jest-puppeteer/commit/5cfee1f2e2475e750a5fe298bd8c99de526ee927))





# [9.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.6...v9.0.0) (2023-05-24)


### Bug Fixes

* **expect-puppeteer:** fix `addSnapshotSerializer` usage ([826fd31](https://github.com/argos-ci/jest-puppeteer/commit/826fd319468ff74e2d314b7dfbed6fcc62ae31cd)), closes [#552](https://github.com/argos-ci/jest-puppeteer/issues/552)


### Features

* drop Node.js v14 support ([d7d9833](https://github.com/argos-ci/jest-puppeteer/commit/d7d9833accf7ddb87c6782a50ae2b8e50dd01c78))


### BREAKING CHANGES

* drop Node.js v14 support





## [8.0.5](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.4...v8.0.5) (2023-03-09)

**Note:** Version bump only for package expect-puppeteer





## [8.0.3](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.2...v8.0.3) (2023-03-07)

**Note:** Version bump only for package expect-puppeteer





## [8.0.2](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.1...v8.0.2) (2023-03-06)


### Bug Fixes

* **npm:** fix package on npm ([ee12bb8](https://github.com/argos-ci/jest-puppeteer/commit/ee12bb8142706118da72eaf9f19439a30993afc7)), closes [#527](https://github.com/argos-ci/jest-puppeteer/issues/527)





## [8.0.1](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.0...v8.0.1) (2023-03-06)


### Bug Fixes

* remove cycle dependency ([ed5c9eb](https://github.com/argos-ci/jest-puppeteer/commit/ed5c9eb9aa59809f37a8cc3ce7ff60139691d170))





# [8.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v7.0.1...v8.0.0) (2023-03-06)


### Features

* native typings ([32acec7](https://github.com/argos-ci/jest-puppeteer/commit/32acec706e01a36c8ffa9dc9ce409bd29fe17dd0))


### BREAKING CHANGES

* - `spawnd` now exports `{ spawd }` instead of default to ensure
  compatibilty with ESM
- `toMatch` has been renamed `toMatchTextContent` to avoid collision
  with existing Jest matcher





## [7.0.1](https://github.com/argos-ci/jest-puppeteer/compare/v7.0.0...v7.0.1) (2023-02-15)

**Note:** Version bump only for package expect-puppeteer





# [7.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v6.2.0...v7.0.0) (2023-02-03)


### Features

* modernize project ([#514](https://github.com/argos-ci/jest-puppeteer/issues/514)) ([6ca8757](https://github.com/argos-ci/jest-puppeteer/commit/6ca8757452e33d00a1a841d6f18b032411f4bdb6))





## [6.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v6.1.0...v6.1.1) (2022-07-06)


### Bug Fixes

* **expect-puppeteer:** return proper error stack traces from matchers ([#487](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/487)) ([e9cafb1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/e9cafb14b3ea5573ff06a55ba13e0718bb482b03))





# [6.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v6.0.3...v6.1.0) (2022-02-02)


### Features

* add traverseShadowRoots option to toMatch ([#463](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/463)) ([28c5235](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/28c523563c2943e686bca2b418cba8e0b794059e))





## [6.0.2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v6.0.1...v6.0.2) (2021-11-25)


### Bug Fixes

* update deps ([#457](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/457)) ([bcd0415](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/bcd04155fbbed08c02a7195b05cab6601f834fb9))





# [6.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v5.0.4...v6.0.0) (2021-09-23)

**Note:** Version bump only for package expect-puppeteer





## [5.0.4](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v5.0.3...v5.0.4) (2021-05-26)


### Bug Fixes

* fix toFill on number input ([#412](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/412)) ([21201a4](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/21201a48c586f4c49d560749410c9d45716fdd2f))





## [5.0.3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v5.0.2...v5.0.3) (2021-04-28)


### Bug Fixes

* fix toFill on textarea ([#399](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/399)) ([7f40bd7](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/7f40bd7372322dce70a7b09df2d3999525d0ca51))
* use Delete to clear input instead of Backspace ([#401](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/401)) ([94e9241](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/94e9241fe7d33134c5edf13235be637d63843568))





# [5.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/compare/v4.4.0...v5.0.0) (2021-04-16)


### Bug Fixes

* toFill doesn't empty contents when given an empty string ([#381](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/381)) ([964b9a2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/964b9a276c0e0219e55cfa0db752d65da93d41b3))


### Features

* support XPATH selectors ([#321](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/issues/321)) ([949027b](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer/commit/949027b1332e270fad78eda10fd1a92c56abe1b5))





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
