# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
