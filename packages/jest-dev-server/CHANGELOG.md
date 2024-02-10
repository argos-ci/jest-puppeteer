# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.2...v10.0.0) (2024-02-10)

**Note:** Version bump only for package jest-dev-server





## [9.0.2](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.1...v9.0.2) (2023-12-06)


### Bug Fixes

* **jest-dev-server:** fix config types ([#573](https://github.com/argos-ci/jest-puppeteer/issues/573)) ([1508009](https://github.com/argos-ci/jest-puppeteer/commit/1508009a41cf4f2016336f50cbcce9c65621593f)), closes [#572](https://github.com/argos-ci/jest-puppeteer/issues/572)





## [9.0.1](https://github.com/argos-ci/jest-puppeteer/compare/v9.0.0...v9.0.1) (2023-10-01)


### Bug Fixes

* fix compatibility with Puppeteer v21 ([#566](https://github.com/argos-ci/jest-puppeteer/issues/566)) ([5cfee1f](https://github.com/argos-ci/jest-puppeteer/commit/5cfee1f2e2475e750a5fe298bd8c99de526ee927))





# [9.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.6...v9.0.0) (2023-05-24)


### Bug Fixes

* **jest-dev-server:** no default host ([c35e403](https://github.com/argos-ci/jest-puppeteer/commit/c35e40362293a23caa50bcddb589ff8f63e16b8e))
* **jest-dev-server:** properly detect if port is used, using both config.port and config.host options. ([351720a](https://github.com/argos-ci/jest-puppeteer/commit/351720a68e02026b25a98ece525003be9f4938dc)), closes [#555](https://github.com/argos-ci/jest-puppeteer/issues/555)


### Features

* drop Node.js v14 support ([d7d9833](https://github.com/argos-ci/jest-puppeteer/commit/d7d9833accf7ddb87c6782a50ae2b8e50dd01c78))


### BREAKING CHANGES

* drop Node.js v14 support
* **jest-dev-server:** default host is now `undefined` instead of "localhost"





## [8.0.5](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.4...v8.0.5) (2023-03-09)

**Note:** Version bump only for package jest-dev-server





## [8.0.3](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.2...v8.0.3) (2023-03-07)

**Note:** Version bump only for package jest-dev-server





## [8.0.2](https://github.com/argos-ci/jest-puppeteer/compare/v8.0.1...v8.0.2) (2023-03-06)


### Bug Fixes

* **npm:** fix package on npm ([ee12bb8](https://github.com/argos-ci/jest-puppeteer/commit/ee12bb8142706118da72eaf9f19439a30993afc7)), closes [#527](https://github.com/argos-ci/jest-puppeteer/issues/527)





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





# [7.0.0](https://github.com/argos-ci/jest-puppeteer/compare/v6.2.0...v7.0.0) (2023-02-03)


### Features

* modernize project ([#514](https://github.com/argos-ci/jest-puppeteer/issues/514)) ([6ca8757](https://github.com/argos-ci/jest-puppeteer/commit/6ca8757452e33d00a1a841d6f18b032411f4bdb6))





# [6.2.0](https://github.com/smooth-code/jest-puppeteer/compare/v6.1.1...v6.2.0) (2022-12-11)

**Note:** Version bump only for package jest-dev-server

## [6.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v6.1.0...v6.1.1) (2022-07-06)

### Bug Fixes

- prevent stdout buffer from filling up ([#482](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/482)) ([6f16345](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/6f16345622c91487b2704bf30350a0e57114c2be))

## [6.0.3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v6.0.2...v6.0.3) (2021-12-14)

**Note:** Version bump only for package jest-dev-server

## [6.0.2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v6.0.1...v6.0.2) (2021-11-25)

### Bug Fixes

- update deps ([#457](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/457)) ([bcd0415](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/bcd04155fbbed08c02a7195b05cab6601f834fb9))

# [6.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v5.0.4...v6.0.0) (2021-09-23)

### Bug Fixes

- allow puppeteer >= 1.5.0 ([#442](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/442)) ([181ee72](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/181ee7229f5401e723cd630b46e73c045da50dcb))
- only throw timed out error if timed out ([#435](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/435)) ([f6c20ab](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/f6c20ab4d653e3058e559852bd00eb44a80f8560))

### BREAKING CHANGES

- drop support for node v10

## [5.0.3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v5.0.2...v5.0.3) (2021-04-28)

### Bug Fixes

- update deps ([#402](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/402)) ([fa91027](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/fa91027d6769a1c1d7f517a02184b994ce0dd05c))

# [5.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v4.4.0...v5.0.0) (2021-04-16)

### Features

- allow path for wait-on resource ([#382](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/382)) ([f2f5b62](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/f2f5b621bb68bb19edd5c2fd525691968baaed88))

# [4.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v4.3.0...v4.4.0) (2019-12-18)

**Note:** Version bump only for package jest-dev-server

# [4.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v4.2.0...v4.3.0) (2019-07-14)

### Bug Fixes

- use host in port check ([#222](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/222)) ([e419eb2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/e419eb2))

# [4.2.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v4.1.1...v4.2.0) (2019-05-28)

### Bug Fixes

- jest-dev-server can't detect used ports ([#235](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/235)) ([8b64c10](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/8b64c10))

### Features

- add waitOnScheme options ([#232](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/232)) ([f772d74](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/f772d74))

## [4.1.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v4.1.0...v4.1.1) (2019-04-11)

### Bug Fixes

- do not attempt to start the server when `usedPortAction` is `ignore` and `isPortTaken` is `true` ([#219](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/219)) ([7df3721](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/7df3721))

# [4.0.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.9.0...v4.0.0) (2019-02-13)

**Note:** Version bump only for package jest-dev-server

# [3.9.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.8.0...v3.9.0) (2019-01-22)

**Note:** Version bump only for package jest-dev-server

# [3.7.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.6.0...v3.7.0) (2018-12-11)

### Features

- **jest-dev-server:** expose servers ([#166](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/166)) ([be650a3](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/be650a3)), closes [#135](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/135)
- use tree-kill instead of terminate ([#169](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/169)) ([bb2e27b](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/bb2e27b))

# [3.6.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.5.2...v3.6.0) (2018-12-06)

### Features

- **jest-dev-server:** support multiple servers ([#163](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/163)) ([6cf690c](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/6cf690c))

## [3.5.2](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.5.1...v3.5.2) (2018-11-27)

### Bug Fixes

- **security:** upgrade dependencies ([e913425](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/e913425))
- **security:** upgrade terminate ([#158](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/158)) ([06fd89e](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/06fd89e))

## [3.5.1](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.5.0...v3.5.1) (2018-11-11)

### Bug Fixes

- avoid prompting for super user login (as possible) ([#149](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/149)) ([1701e9b](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/1701e9b))

# [3.5.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.4.0...v3.5.0) (2018-11-04)

### Bug Fixes

- **jest-dev-server:** do not require port to run server ([5aee5fe](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/5aee5fe)), closes [#146](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/146)
- **jest-dev-server:** do not scan process if usedPortAction is "ignore" ([cceb0bd](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/cceb0bd)), closes [#96](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/96)

<a name="3.4.0"></a>

# [3.4.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.3.1...v3.4.0) (2018-09-24)

**Note:** Version bump only for package jest-dev-server

<a name="3.3.0"></a>

# [3.3.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.2.1...v3.3.0) (2018-08-15)

### Bug Fixes

- **jest-dev-server:** support for port being held by System Idle Process ([#95](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/95)) ([e454973](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/e454973))

### Features

- **jest-dev-server:** add support for protocol & host ([#93](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/93)) ([5dca53b](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/5dca53b))

<a name="3.2.0"></a>

# [3.2.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.1.0...v3.2.0) (2018-06-17)

### Bug Fixes

- **jest-dev-server:** fix watch mode stdin after ask ([a7ca57b](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/a7ca57b))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/compare/v3.0.1...v3.1.0) (2018-06-16)

### Features

- **jest-dev-server:** externalize it & auto-kill ([45e8fbb](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/commit/45e8fbb)), closes [#66](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/66) [#68](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server/issues/68)
