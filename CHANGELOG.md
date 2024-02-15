# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.0.1](https://github.com/argos-ci/jest-puppeteer/compare/v10.0.0...v10.0.1) (2024-02-15)


### Bug Fixes

* fix `WORKERS_COUNT` not found ([#578](https://github.com/argos-ci/jest-puppeteer/issues/578)) ([6897b22](https://github.com/argos-ci/jest-puppeteer/commit/6897b2225ad3567c322913864ae97267beae4922))





# [10.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.2...v10.0.0) (2024-02-10)


### Features

* add Puppeteer v22 compatibility ([#576](https://github.com/argos-ci/jest-puppeteer/issues/576)) ([6d7a02f](https://github.com/argos-ci/jest-puppeteer/commit/6d7a02fd5561f4ca1c9d52e2c8559df8f1c2d83f))


### BREAKING CHANGES

* Drop Node.js v16 support.





## [9.0.2](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.1...v9.0.2) (2023-12-06)


### Bug Fixes

* **jest-dev-server:** fix config types ([#573](https://github.com/argos-ci/jest-puppeteer/issues/573)) ([1508009](https://github.com/argos-ci/jest-puppeteer/commit/1508009a41cf4f2016336f50cbcce9c65621593f)), closes [#572](https://github.com/argos-ci/jest-puppeteer/issues/572)





## [9.0.1](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.0...v9.0.1) (2023-10-01)


### Bug Fixes

* fix compatibility with Puppeteer v21 ([#566](https://github.com/argos-ci/jest-puppeteer/issues/566)) ([5cfee1f](https://github.com/argos-ci/jest-puppeteer/commit/5cfee1f2e2475e750a5fe298bd8c99de526ee927))





# [9.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.6...v9.0.0) (2023-05-24)


### Bug Fixes

* **expect-puppeteer:** fix `addSnapshotSerializer` usage ([826fd31](https://github.com/argos-ci/jest-puppeteer/commit/826fd319468ff74e2d314b7dfbed6fcc62ae31cd)), closes [#552](https://github.com/argos-ci/jest-puppeteer/issues/552)
* **jest-dev-server:** no default host ([c35e403](https://github.com/argos-ci/jest-puppeteer/commit/c35e40362293a23caa50bcddb589ff8f63e16b8e))
* **jest-dev-server:** properly detect if port is used, using both config.port and config.host options. ([351720a](https://github.com/argos-ci/jest-puppeteer/commit/351720a68e02026b25a98ece525003be9f4938dc)), closes [#555](https://github.com/argos-ci/jest-puppeteer/issues/555)
* **types:** fix environment global types ([fb691f7](https://github.com/argos-ci/jest-puppeteer/commit/fb691f7213ca148f35f7062ab47465ab3ffc2d5e))
* **types:** fix missing `jestPuppeteer` global before setup ([37e2294](https://github.com/argos-ci/jest-puppeteer/commit/37e2294a626255a701dc3adad004c610cc2c4c04))


### Features

* drop Node.js v14 support ([d7d9833](https://github.com/argos-ci/jest-puppeteer/commit/d7d9833accf7ddb87c6782a50ae2b8e50dd01c78))


### BREAKING CHANGES

* drop Node.js v14 support
* **jest-dev-server:** default host is now `undefined` instead of "localhost"





## [8.0.6](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.5...v8.0.6) (2023-03-24)


### Bug Fixes

* **types:** fix exports issues ([861c07d](https://github.com/argos-ci/jest-puppeteer/commit/861c07d2d5fa32cda34b9dc193913c22890adb9b)), closes [#545](https://github.com/argos-ci/jest-puppeteer/issues/545) [#546](https://github.com/argos-ci/jest-puppeteer/issues/546)





## [8.0.5](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.4...v8.0.5) (2023-03-09)


### Bug Fixes

* **spawnd:** remove exit dependency ([af2eb01](https://github.com/argos-ci/jest-puppeteer/commit/af2eb010a40986a6a3a54d5ca883c186b97d57ea)), closes [#541](https://github.com/argos-ci/jest-puppeteer/issues/541)





## [8.0.4](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.3...v8.0.4) (2023-03-08)


### Bug Fixes

* fix preset export ([7d8d10c](https://github.com/argos-ci/jest-puppeteer/commit/7d8d10c4cbaeb5e2c6ac7eeceb2a0b73f78b453d)), closes [#532](https://github.com/argos-ci/jest-puppeteer/issues/532)





## [8.0.3](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.2...v8.0.3) (2023-03-07)


### Bug Fixes

* avoid creating screenshots directory ([d9e58fe](https://github.com/argos-ci/jest-puppeteer/commit/d9e58fefb8649329806cb36c65a4eecb3eb91fbe)), closes [#521](https://github.com/argos-ci/jest-puppeteer/issues/521)
* **jest-puppeteer:** fix preset export ([82e4163](https://github.com/argos-ci/jest-puppeteer/commit/82e41634479b666605bcee42ed45ed07f38f7589)), closes [#528](https://github.com/argos-ci/jest-puppeteer/issues/528)





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


### Bug Fixes

* **jest-dev-server:** fix port detection ([#518](https://github.com/argos-ci/jest-puppeteer/issues/518)) ([805819d](https://github.com/argos-ci/jest-puppeteer/commit/805819d27e6dc5e086c7d29fa3f623b99fc65ecd)), closes [#460](https://github.com/argos-ci/jest-puppeteer/issues/460) [#281](https://github.com/argos-ci/jest-puppeteer/issues/281) [#233](https://github.com/argos-ci/jest-puppeteer/issues/233)





# [7.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v6.2.0...v7.0.0) (2023-02-03)


### Features

* modernize project ([#514](https://github.com/smooth-code/jest-puppeteer/issues/514)) ([6ca8757](https://github.com/smooth-code/jest-puppeteer/commit/6ca8757452e33d00a1a841d6f18b032411f4bdb6))
* target puppeteer v19+ ([31f6f1e](https://github.com/smooth-code/jest-puppeteer/commit/31f6f1e5de72edc639db65cd6688eab7c02693ac))


### BREAKING CHANGES

* requires puppeteer v19+





# [6.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v6.1.1...v6.2.0) (2022-12-11)

### Bug Fixes

- update deps ([#508](https://github.com/smooth-code/jest-puppeteer/issues/508)) ([67701a7](https://github.com/smooth-code/jest-puppeteer/commit/67701a7e2056578edac90259cfc145e643a359c3))

### Features

- Add option `runBeforeUnloadOnClose` ([#504](https://github.com/smooth-code/jest-puppeteer/issues/504)) ([317ed12](https://github.com/smooth-code/jest-puppeteer/commit/317ed12942603ea1057ad02c87a3e67c2aa2d4fe))

## [6.1.1](https://github.com/smooth-code/jest-puppeteer/compare/v6.1.0...v6.1.1) (2022-07-06)

### Bug Fixes

- **expect-puppeteer:** return proper error stack traces from matchers ([#487](https://github.com/smooth-code/jest-puppeteer/issues/487)) ([e9cafb1](https://github.com/smooth-code/jest-puppeteer/commit/e9cafb14b3ea5573ff06a55ba13e0718bb482b03))
- prevent stdout buffer from filling up ([#482](https://github.com/smooth-code/jest-puppeteer/issues/482)) ([6f16345](https://github.com/smooth-code/jest-puppeteer/commit/6f16345622c91487b2704bf30350a0e57114c2be))

# [6.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v6.0.3...v6.1.0) (2022-02-02)

### Features

- add traverseShadowRoots option to toMatch ([#463](https://github.com/smooth-code/jest-puppeteer/issues/463)) ([28c5235](https://github.com/smooth-code/jest-puppeteer/commit/28c523563c2943e686bca2b418cba8e0b794059e))

## [6.0.3](https://github.com/smooth-code/jest-puppeteer/compare/v6.0.2...v6.0.3) (2021-12-14)

### Bug Fixes

- avoid running connect in global setup if browserWSEndpoint provided in config ([#458](https://github.com/smooth-code/jest-puppeteer/issues/458)) ([c9fa515](https://github.com/smooth-code/jest-puppeteer/commit/c9fa515e51bdcd77ceb5f3aa7ee429a54647df7b))

## [6.0.2](https://github.com/smooth-code/jest-puppeteer/compare/v6.0.1...v6.0.2) (2021-11-25)

### Bug Fixes

- Revert catch on disconnect ([#456](https://github.com/smooth-code/jest-puppeteer/issues/456)) ([51b8706](https://github.com/smooth-code/jest-puppeteer/commit/51b8706))
- update deps ([#457](https://github.com/smooth-code/jest-puppeteer/issues/457)) ([bcd0415](https://github.com/smooth-code/jest-puppeteer/commit/bcd04155fbbed08c02a7195b05cab6601f834fb9))

## [6.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v6.0.0...v6.0.1) (2021-11-24)

### Bug Fixes

- Catch exceptions on browser close or disconnect during teardown ([#453](https://github.com/smooth-code/jest-puppeteer/issues/453)) ([adafcc2](https://github.com/smooth-code/jest-puppeteer/commit/adafcc2613934b43cf44e0c01fb8faf6f6640adc))

# [6.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v5.0.4...v6.0.0) (2021-09-23)

### Bug Fixes

- Add browserPerWorker setting ([#420](https://github.com/smooth-code/jest-puppeteer/issues/420)) ([5320871](https://github.com/smooth-code/jest-puppeteer/commit/53208719c486f7c7f45982a609002b738e9fcd95))
- allow puppeteer >= 1.5.0 ([#442](https://github.com/smooth-code/jest-puppeteer/issues/442)) ([181ee72](https://github.com/smooth-code/jest-puppeteer/commit/181ee7229f5401e723cd630b46e73c045da50dcb))
- only throw timed out error if timed out ([#435](https://github.com/smooth-code/jest-puppeteer/issues/435)) ([f6c20ab](https://github.com/smooth-code/jest-puppeteer/commit/f6c20ab4d653e3058e559852bd00eb44a80f8560))
- remove wait-port dependency ([#434](https://github.com/smooth-code/jest-puppeteer/issues/434)) ([3d6cae0](https://github.com/smooth-code/jest-puppeteer/commit/3d6cae007a2dbb9e5c67e8f0ed5f8429206436d9))

### BREAKING CHANGES

- drop support for node v10

## [5.0.4](https://github.com/smooth-code/jest-puppeteer/compare/v5.0.3...v5.0.4) (2021-05-26)

### Bug Fixes

- fix toFill on number input ([#412](https://github.com/smooth-code/jest-puppeteer/issues/412)) ([21201a4](https://github.com/smooth-code/jest-puppeteer/commit/21201a48c586f4c49d560749410c9d45716fdd2f))
- update deps ([#413](https://github.com/smooth-code/jest-puppeteer/issues/413)) ([f83828a](https://github.com/smooth-code/jest-puppeteer/commit/f83828abc18f46328c78a5faf40fa16d150db9e5))

## [5.0.3](https://github.com/smooth-code/jest-puppeteer/compare/v5.0.2...v5.0.3) (2021-04-28)

### Bug Fixes

- fix toFill on textarea ([#399](https://github.com/smooth-code/jest-puppeteer/issues/399)) ([7f40bd7](https://github.com/smooth-code/jest-puppeteer/commit/7f40bd7372322dce70a7b09df2d3999525d0ca51))
- update deps ([#402](https://github.com/smooth-code/jest-puppeteer/issues/402)) ([fa91027](https://github.com/smooth-code/jest-puppeteer/commit/fa91027d6769a1c1d7f517a02184b994ce0dd05c))
- use Delete to clear input instead of Backspace ([#401](https://github.com/smooth-code/jest-puppeteer/issues/401)) ([94e9241](https://github.com/smooth-code/jest-puppeteer/commit/94e9241fe7d33134c5edf13235be637d63843568))

## [5.0.2](https://github.com/smooth-code/jest-puppeteer/compare/v5.0.1...v5.0.2) (2021-04-21)

### Bug Fixes

- update puppeteer version ([#398](https://github.com/smooth-code/jest-puppeteer/issues/398)) ([104faf4](https://github.com/smooth-code/jest-puppeteer/commit/104faf4d84c019f8ed2d845e09e2a52423a105de))

## [5.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v5.0.0...v5.0.1) (2021-04-19)

### Bug Fixes

- add jest-environment-node as a dependency ([#397](https://github.com/smooth-code/jest-puppeteer/issues/397)) ([11f2e38](https://github.com/smooth-code/jest-puppeteer/commit/11f2e3816b9db3858617b203436192493af75e80))

# [5.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.4.0...v5.0.0) (2021-04-16)

### Bug Fixes

- Leverage Puppeteer's native support for Firefox ([#356](https://github.com/smooth-code/jest-puppeteer/issues/356)) ([e54fb7e](https://github.com/smooth-code/jest-puppeteer/commit/e54fb7e3e31568f3322c14d9beb8dcd4435c3675))
- require to `puppeteer-core` as fallback ([#315](https://github.com/smooth-code/jest-puppeteer/issues/315)) ([49d313c](https://github.com/smooth-code/jest-puppeteer/commit/49d313c367812541251c4376162d1e222a96fdc0))
- Resolve module paths in preset ([#335](https://github.com/smooth-code/jest-puppeteer/issues/335)) ([36602a1](https://github.com/smooth-code/jest-puppeteer/commit/36602a1fccd304a21e333a0860f87e0d49fec38c))
- toFill doesn't empty contents when given an empty string ([#381](https://github.com/smooth-code/jest-puppeteer/issues/381)) ([964b9a2](https://github.com/smooth-code/jest-puppeteer/commit/964b9a276c0e0219e55cfa0db752d65da93d41b3))

### Features

- allow path for wait-on resource ([#382](https://github.com/smooth-code/jest-puppeteer/issues/382)) ([f2f5b62](https://github.com/smooth-code/jest-puppeteer/commit/f2f5b621bb68bb19edd5c2fd525691968baaed88))
- support XPATH selectors ([#321](https://github.com/smooth-code/jest-puppeteer/issues/321)) ([949027b](https://github.com/smooth-code/jest-puppeteer/commit/949027b1332e270fad78eda10fd1a92c56abe1b5))

### BREAKING CHANGES

- browser config is deprecated. Use launch.product
  instead.
- jest-dev-server uses axios instead of request so the `waitOnScheme` options may have changed. see [wait-on v5.0.0 changelog](https://github.com/jeffbski/wait-on/releases/tag/v5.0.0) for more details

# [4.4.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.3.0...v4.4.0) (2019-12-18)

### Bug Fixes

- fix toDisplayDialog ([ce9df04](https://github.com/smooth-code/jest-puppeteer/commit/ce9df04642720a6af23e9b25f1b341bc82eca564))
- fixes --watch mode server start&restarts ([#299](https://github.com/smooth-code/jest-puppeteer/issues/299)) ([d49a6a1](https://github.com/smooth-code/jest-puppeteer/commit/d49a6a127cf636ef398609f565dff5f537c80532))
- only call setRawMode if stdin is TTY ([#301](https://github.com/smooth-code/jest-puppeteer/issues/301)) ([61d04c7](https://github.com/smooth-code/jest-puppeteer/commit/61d04c7e54908c2d662152cc0840b121742437fb))
- teardown browser in watch mode. ([#270](https://github.com/smooth-code/jest-puppeteer/issues/270)) ([04de87a](https://github.com/smooth-code/jest-puppeteer/commit/04de87ae34c2b4be65d0a18e89252304b21d6255))

### Features

- increase peerDependencies to allow Puppeteer v2 ([#289](https://github.com/smooth-code/jest-puppeteer/issues/289)) ([62a9b81](https://github.com/smooth-code/jest-puppeteer/commit/62a9b819cebf67d7e7b36453b79fba06390585ca))
- **expect-puppeteer:** support frames ([#275](https://github.com/smooth-code/jest-puppeteer/issues/275)) ([09703ea](https://github.com/smooth-code/jest-puppeteer/commit/09703eaeeeab553e13142153b55030db05611f7c))

# [4.3.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.2.0...v4.3.0) (2019-07-14)

### Bug Fixes

- use host in port check ([#222](https://github.com/smooth-code/jest-puppeteer/issues/222)) ([e419eb2](https://github.com/smooth-code/jest-puppeteer/commit/e419eb2))

### Features

- add jestPuppeteer.resetBrowser method ([#237](https://github.com/smooth-code/jest-puppeteer/issues/237)) ([ae93739](https://github.com/smooth-code/jest-puppeteer/commit/ae93739))

# [4.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.1.1...v4.2.0) (2019-05-28)

### Bug Fixes

- jest-dev-server can't detect used ports ([#235](https://github.com/smooth-code/jest-puppeteer/issues/235)) ([8b64c10](https://github.com/smooth-code/jest-puppeteer/commit/8b64c10))

### Features

- add waitOnScheme options ([#232](https://github.com/smooth-code/jest-puppeteer/issues/232)) ([f772d74](https://github.com/smooth-code/jest-puppeteer/commit/f772d74))
- support "browser" config option ([#220](https://github.com/smooth-code/jest-puppeteer/issues/220)) ([85a1122](https://github.com/smooth-code/jest-puppeteer/commit/85a1122)), closes [#171](https://github.com/smooth-code/jest-puppeteer/issues/171)

## [4.1.1](https://github.com/smooth-code/jest-puppeteer/compare/v4.1.0...v4.1.1) (2019-04-11)

### Bug Fixes

- do not attempt to start the server when `usedPortAction` is `ignore` and `isPortTaken` is `true` ([#219](https://github.com/smooth-code/jest-puppeteer/issues/219)) ([7df3721](https://github.com/smooth-code/jest-puppeteer/commit/7df3721))

# [4.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v4.0.0...v4.1.0) (2019-03-14)

### Bug Fixes

- invalid connect options, when using browserURL ([#212](https://github.com/smooth-code/jest-puppeteer/issues/212)) ([6e483e6](https://github.com/smooth-code/jest-puppeteer/commit/6e483e6))

### Features

- **expect-puppeteer:** add visibility option to toMatchElement ([#208](https://github.com/smooth-code/jest-puppeteer/issues/208)) ([46d8ec1](https://github.com/smooth-code/jest-puppeteer/commit/46d8ec1))

# [4.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.9.0...v4.0.0) (2019-02-13)

### Bug Fixes

- Cannot read property watch of undefined in jest v22 version ([#197](https://github.com/smooth-code/jest-puppeteer/issues/197)) ([db731a3](https://github.com/smooth-code/jest-puppeteer/commit/db731a3))

### Features

- support jest v24 ([#196](https://github.com/smooth-code/jest-puppeteer/issues/196)) ([dbcc9d0](https://github.com/smooth-code/jest-puppeteer/commit/dbcc9d0))

### BREAKING CHANGES

- v4.x is only compatible with Jest v24, use v3.x with Jest v23.

# [3.9.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.8.0...v3.9.0) (2019-01-22)

### Bug Fixes

- jest --watch fails to reload ([#182](https://github.com/smooth-code/jest-puppeteer/issues/182)) ([cc9bbfa](https://github.com/smooth-code/jest-puppeteer/commit/cc9bbfa))
- wrong timeout when using jestPuppeteer.debug() ([#185](https://github.com/smooth-code/jest-puppeteer/issues/185)) ([0f4c720](https://github.com/smooth-code/jest-puppeteer/commit/0f4c720))

### Features

- add jestPuppeteer.resetPage ([#183](https://github.com/smooth-code/jest-puppeteer/issues/183)) ([3a5526c](https://github.com/smooth-code/jest-puppeteer/commit/3a5526c))

# [3.8.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.7.0...v3.8.0) (2019-01-11)

### Bug Fixes

- disconnect the browser on environment teardown ([#173](https://github.com/smooth-code/jest-puppeteer/issues/173)) ([5d073cc](https://github.com/smooth-code/jest-puppeteer/commit/5d073cc))

### Features

- **jest-environment-puppeteer:** accept a promise as config ([#178](https://github.com/smooth-code/jest-puppeteer/issues/178)) ([40bc3a2](https://github.com/smooth-code/jest-puppeteer/commit/40bc3a2))

# [3.7.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.6.0...v3.7.0) (2018-12-11)

### Features

- **jest-dev-server:** expose servers ([#166](https://github.com/smooth-code/jest-puppeteer/issues/166)) ([be650a3](https://github.com/smooth-code/jest-puppeteer/commit/be650a3)), closes [#135](https://github.com/smooth-code/jest-puppeteer/issues/135)
- use tree-kill instead of terminate ([#169](https://github.com/smooth-code/jest-puppeteer/issues/169)) ([bb2e27b](https://github.com/smooth-code/jest-puppeteer/commit/bb2e27b))

# [3.6.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.5.2...v3.6.0) (2018-12-06)

### Bug Fixes

- skip closing external browser on teardown ([0505b2c](https://github.com/smooth-code/jest-puppeteer/commit/0505b2c))
- use browser.disconnect method ([7afbb2e](https://github.com/smooth-code/jest-puppeteer/commit/7afbb2e))

### Features

- **jest-dev-server:** support multiple servers ([#163](https://github.com/smooth-code/jest-puppeteer/issues/163)) ([6cf690c](https://github.com/smooth-code/jest-puppeteer/commit/6cf690c))

## [3.5.2](https://github.com/smooth-code/jest-puppeteer/compare/v3.5.1...v3.5.2) (2018-11-27)

### Bug Fixes

- **security:** upgrade dependencies ([e913425](https://github.com/smooth-code/jest-puppeteer/commit/e913425))
- **security:** upgrade terminate ([#158](https://github.com/smooth-code/jest-puppeteer/issues/158)) ([06fd89e](https://github.com/smooth-code/jest-puppeteer/commit/06fd89e))

## [3.5.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.5.0...v3.5.1) (2018-11-11)

### Bug Fixes

- avoid prompting for super user login (as possible) ([#149](https://github.com/smooth-code/jest-puppeteer/issues/149)) ([1701e9b](https://github.com/smooth-code/jest-puppeteer/commit/1701e9b))

# [3.5.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.4.0...v3.5.0) (2018-11-04)

### Bug Fixes

- **jest-dev-server:** do not require port to run server ([5aee5fe](https://github.com/smooth-code/jest-puppeteer/commit/5aee5fe)), closes [#146](https://github.com/smooth-code/jest-puppeteer/issues/146)
- **jest-dev-server:** do not scan process if usedPortAction is "ignore" ([cceb0bd](https://github.com/smooth-code/jest-puppeteer/commit/cceb0bd)), closes [#96](https://github.com/smooth-code/jest-puppeteer/issues/96)

### Features

- add incognito context support ([#140](https://github.com/smooth-code/jest-puppeteer/issues/140)) ([5b8983a](https://github.com/smooth-code/jest-puppeteer/commit/5b8983a)), closes [#133](https://github.com/smooth-code/jest-puppeteer/issues/133)
- disable tab throttling ([#144](https://github.com/smooth-code/jest-puppeteer/issues/144)) ([b92e76c](https://github.com/smooth-code/jest-puppeteer/commit/b92e76c)), closes [#137](https://github.com/smooth-code/jest-puppeteer/issues/137)

### Performance Improvements

- remove lodash dependency ([#143](https://github.com/smooth-code/jest-puppeteer/issues/143)) ([0cf7109](https://github.com/smooth-code/jest-puppeteer/commit/0cf7109))

<a name="3.4.0"></a>

# [3.4.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.3.1...v3.4.0) (2018-09-24)

### Bug Fixes

- support several instances of Jest in parallel ([#138](https://github.com/smooth-code/jest-puppeteer/issues/138)) ([275bc71](https://github.com/smooth-code/jest-puppeteer/commit/275bc71))

### Features

- **expect-puppeteer:** Update default options to look at connect object ([1f33ea0](https://github.com/smooth-code/jest-puppeteer/commit/1f33ea0))
- **jest-environment-puppeteer:** Add ability to connect to an already existing instance of Chrome ([9de05f0](https://github.com/smooth-code/jest-puppeteer/commit/9de05f0))
- **jest-environment-puppeteer:** Add documentation of new `connect `options ([c6b0613](https://github.com/smooth-code/jest-puppeteer/commit/c6b0613))
- **jest-environment-puppeteer:** Remove unneeded async config ([30a3daa](https://github.com/smooth-code/jest-puppeteer/commit/30a3daa))
- **jest-environment-puppeteer:** Simplify getBrowser function ([8ccb0d0](https://github.com/smooth-code/jest-puppeteer/commit/8ccb0d0))

<a name="3.3.1"></a>

## [3.3.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.3.0...v3.3.1) (2018-08-17)

### Bug Fixes

- revert pid based endpoint file ([4a08847](https://github.com/smooth-code/jest-puppeteer/commit/4a08847)), closes [#103](https://github.com/smooth-code/jest-puppeteer/issues/103)

<a name="3.3.0"></a>

# [3.3.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.2.1...v3.3.0) (2018-08-15)

### Bug Fixes

- **jest-dev-server:** support for port being held by System Idle Process ([#95](https://github.com/smooth-code/jest-puppeteer/issues/95)) ([e454973](https://github.com/smooth-code/jest-puppeteer/commit/e454973))

### Features

- **jest-dev-server:** add support for protocol & host ([#93](https://github.com/smooth-code/jest-puppeteer/issues/93)) ([5dca53b](https://github.com/smooth-code/jest-puppeteer/commit/5dca53b))
- add support for defaultViewport option ([7b484a8](https://github.com/smooth-code/jest-puppeteer/commit/7b484a8))
- support multiple processes on same machine ([#103](https://github.com/smooth-code/jest-puppeteer/issues/103)) ([4d37d17](https://github.com/smooth-code/jest-puppeteer/commit/4d37d17))

<a name="3.2.1"></a>

## [3.2.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.2.0...v3.2.1) (2018-06-17)

### Bug Fixes

- fix debug mode ([7e395a3](https://github.com/smooth-code/jest-puppeteer/commit/7e395a3))

<a name="3.2.0"></a>

# [3.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.1.0...v3.2.0) (2018-06-17)

### Bug Fixes

- **jest-dev-server:** fix watch mode stdin after ask ([a7ca57b](https://github.com/smooth-code/jest-puppeteer/commit/a7ca57b))

### Features

- add debug mode ([4f79768](https://github.com/smooth-code/jest-puppeteer/commit/4f79768))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v3.0.1...v3.1.0) (2018-06-16)

### Features

- **jest-dev-server:** externalize it & auto-kill ([45e8fbb](https://github.com/smooth-code/jest-puppeteer/commit/45e8fbb)), closes [#66](https://github.com/smooth-code/jest-puppeteer/issues/66) [#68](https://github.com/smooth-code/jest-puppeteer/issues/68)

<a name="3.0.1"></a>

## [3.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v3.0.0...v3.0.1) (2018-05-03)

### Bug Fixes

- **expect-puppeteer:** use the same behaviour on toMatch and toMatchElement ([784bde8](https://github.com/smooth-code/jest-puppeteer/commit/784bde8))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.4.0...v3.0.0) (2018-05-03)

### Features

- **expect-puppeteer:** added delay option to element.type for toFill matcher ([#52](https://github.com/smooth-code/jest-puppeteer/issues/52)) ([ee39ba9](https://github.com/smooth-code/jest-puppeteer/commit/ee39ba9))
- **expect-puppeteer:** enhance toMatchElement / toClick text option ([cee8f46](https://github.com/smooth-code/jest-puppeteer/commit/cee8f46)), closes [#51](https://github.com/smooth-code/jest-puppeteer/issues/51) [#50](https://github.com/smooth-code/jest-puppeteer/issues/50)

### BREAKING CHANGES

- **expect-puppeteer:** Text is now trimmed and no longer evaluated as a RegExp. If you want this behaviour, use a true RegExp.

<a name="2.4.0"></a>

# [2.4.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.3.0...v2.4.0) (2018-04-24)

### Features

- **expect-puppeteer:** keep original error message ([#45](https://github.com/smooth-code/jest-puppeteer/issues/45)) ([72b60a9](https://github.com/smooth-code/jest-puppeteer/commit/72b60a9)), closes [#33](https://github.com/smooth-code/jest-puppeteer/issues/33)
- **expect-puppeteer:** make default options configurable ([#46](https://github.com/smooth-code/jest-puppeteer/issues/46)) ([0d493c4](https://github.com/smooth-code/jest-puppeteer/commit/0d493c4))
- adjust default timeout with slowMo ([6871ec8](https://github.com/smooth-code/jest-puppeteer/commit/6871ec8)), closes [#36](https://github.com/smooth-code/jest-puppeteer/issues/36)
- **jest-environment-puppeteer:** add server.launchTimeout & server.debug options ([e312717](https://github.com/smooth-code/jest-puppeteer/commit/e312717)), closes [#44](https://github.com/smooth-code/jest-puppeteer/issues/44)
- **jest-environment-puppeteer:** added config option for global err msg ([#35](https://github.com/smooth-code/jest-puppeteer/issues/35)) ([d87c99a](https://github.com/smooth-code/jest-puppeteer/commit/d87c99a)), closes [#34](https://github.com/smooth-code/jest-puppeteer/issues/34)

<a name="2.3.0"></a>

# [2.3.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.3...v2.3.0) (2018-04-06)

### Features

- **jest-environment-puppeteer:** support custom config ([6cd3050](https://github.com/smooth-code/jest-puppeteer/commit/6cd3050)), closes [#19](https://github.com/smooth-code/jest-puppeteer/issues/19)

<a name="2.2.3"></a>

## [2.2.3](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.2...v2.2.3) (2018-04-03)

### Bug Fixes

- support `ignoreHTTPSErrors` launch option ([ed60439](https://github.com/smooth-code/jest-puppeteer/commit/ed60439))

<a name="2.2.2"></a>

## [2.2.2](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.1...v2.2.2) (2018-04-01)

### Bug Fixes

- **expect-puppeteer:** reduce chance of collision ([83ade43](https://github.com/smooth-code/jest-puppeteer/commit/83ade43)), closes [#issuecomment-377698539](https://github.com/smooth-code/jest-puppeteer/issues/issuecomment-377698539)
- **jest-environment-puppeteer:** support slowMo ([0fd5b19](https://github.com/smooth-code/jest-puppeteer/commit/0fd5b19)), closes [#20](https://github.com/smooth-code/jest-puppeteer/issues/20)

<a name="2.2.1"></a>

## [2.2.1](https://github.com/smooth-code/jest-puppeteer/compare/v2.2.0...v2.2.1) (2018-03-25)

### Bug Fixes

- support original Jest matchers ([99d542e](https://github.com/smooth-code/jest-puppeteer/commit/99d542e)), closes [#17](https://github.com/smooth-code/jest-puppeteer/issues/17)

<a name="2.2.0"></a>

# [2.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.1.0...v2.2.0) (2018-03-17)

### Features

- add jest-puppeteer pkg ([48289c8](https://github.com/smooth-code/jest-puppeteer/commit/48289c8))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v2.0.1...v2.1.0) (2018-03-16)

### Features

- add element handle support ([4d37d5b](https://github.com/smooth-code/jest-puppeteer/commit/4d37d5b))

<a name="2.0.1"></a>

## [2.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v2.0.0...v2.0.1) (2018-03-08)

### Bug Fixes

- **expect-puppeteer:** fix expectMatch when body is undefined ([#9](https://github.com/smooth-code/jest-puppeteer/issues/9)) ([0c60970](https://github.com/smooth-code/jest-puppeteer/commit/0c60970))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v1.1.1...v2.0.0) (2018-03-05)

### Bug Fixes

- add missing await to README ([cb11763](https://github.com/smooth-code/jest-puppeteer/commit/cb11763))

### Features

- integrate server launch ([dbea571](https://github.com/smooth-code/jest-puppeteer/commit/dbea571))
- simplify expect usage ([e0fc3d1](https://github.com/smooth-code/jest-puppeteer/commit/e0fc3d1))

### BREAKING CHANGES

- `expectPage()` is replaced by `expect(page)`
- Puppeteer launch options are now specified under `launch` object

<a name="1.1.1"></a>

## [1.1.1](https://github.com/smooth-code/jest-puppeteer/compare/v1.1.0...v1.1.1) (2018-03-04)

### Bug Fixes

- **expect-puppeteer:** add all sources in pkg ([bb51870](https://github.com/smooth-code/jest-puppeteer/commit/bb51870))

<a name="1.1.0"></a>

## [1.1.0](https://github.com/smooth-code/jest-puppeteer/compare/v1.0.1...v1.1.0) (2018-03-04)

### Features

- add jest-puppeteer-preset ([7fbb273](https://github.com/smooth-code/jest-puppeteer/commit/7fbb273))
- add spawnd & expect-puppeteer ([6b7f5a4](https://github.com/smooth-code/jest-puppeteer/commit/6b7f5a4))

<a name="1.0.1"></a>

## [1.0.1](https://github.com/smooth-code/jest-puppeteer/compare/v1.0.0...v1.0.1) (2018-03-03)

Move to Lerna.

<a name="1.0.0"></a>

## [1.0.0](https://github.com/smooth-code/jest-puppeteer/compare/v0.2.0...v1.0.0) (2018-03-03)

### feta

- simplify API

### BREAKING CHANGES

- - `mainPage` is renamed into `page`

* "/globalSetup" => "/setup"
* "/globalTeardown" => "/teardown"
* "/testEnvironment" => ""

<a name="0.2.0"></a>

## [0.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v0.1.0...v0.2.0) (2018-03-03)

### Features

- support Puppeteer configuration

<a name="0.1.0"></a>

## 0.1.0 (2018-03-02)

### Features

- first version 🎉
