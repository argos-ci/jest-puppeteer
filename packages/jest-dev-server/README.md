# jest-dev-server

Starts a server before your Jest tests and tears it down after.

## Why

`jest-puppeteer` works great for running tests in Jest using Puppeteer.
It's also useful for starting a local development server during the tests without letting Jest hang.
This package extracts just the local development server spawning without any ties to Puppeteer.

## Install

```bash
npm install --save-dev jest-dev-server
```

## Usage

`jest-dev-server` exports `setup`,`teardown` and `getServers` functions.

```js
// global-setup.js
const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `node config/start.js --port=3000`,
    launchTimeout: 50000,
    port: 3000,
  })
  // Your global setup
}
```

It is also possible to specify several servers:

```js
// global-setup.js
const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer([
    {
      command: 'node server.js',
      port: 4444,
    },
    {
      command: 'node server2.js',
      port: 4445,
    },
  ])
  // Your global setup
}
```

```js
// global-setup.js
const { setup: setupDevServer, getServers} = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `node config/start.js --port=3000`,
    launchTimeout: 50000,
    port: 3000,
  })
  getServers.then(servers => {
    // You can get to the servers and do whatever you want
  })
  // Your global setup
}
```

```js
// global-teardown.js
const { teardown: teardownDevServer } = require('jest-dev-server')

module.exports = async function globalTeardown() {
  await teardownDevServer()
  // Your global teardown
}
```

## Options

### `command`

Type: `string`, required.

Command to execute to start the port.
Directly passed to [`spawnd`](https://www.npmjs.com/package/spawnd).

```js
module.exports = {
  command: 'npm run start',
}
```

### `debug`

Type: `boolean`, default to `false`.

Log server output, useful if server is crashing at start.

```js
module.exports = {
  command: 'npm run start',
  debug: true,
}
```

### `launchTimeout`

Type: `number`, default to `5000`.

How many milliseconds to wait for the spawned server to be available before giving up.
Defaults to [`wait-port`](https://www.npmjs.com/package/wait-port)'s default.

```js
module.exports = {
  command: 'npm run start',
  launchTimeout: 30000,
}
```

---

Following options are linked to [`spawnd`](https://www.npmjs.com/package/spawnd).

### `host`

Type: `string`, default to `localhost`.

Host to wait for activity on before considering the server running.
Must be used in conjunction with `port`.

```js
module.exports = {
  command: 'npm run start --port 3000',
  host: 'customhost.com',
  port: 3000,
}
```

### `protocol`

Type: `string`, default to `null`.

To wait for an HTTP endpoint before considering the server running, include `http` as a protocol.
Must be used in conjunction with `port`.

```js
module.exports = {
  command: 'npm run start --port 3000',
  protocol: 'http',
  port: 3000,
}
```

### `port`

Type: `number`, default to `null`.

Port to wait for activity on before considering the server running.
If not provided, the server is assumed to immediately be running.

```js
module.exports = {
  command: 'npm run start --port 3000',
  port: 3000,
}
```

### `usedPortAction`

Type: `string` (`ask`, `error`, `ignore`, `kill`) default to `ask`.

It defines the action to take if port is already used:

- `ask`: a prompt is shown to decide if you want to kill the process or not
- `error`: an errow is thrown
- `ignore`: your test are executed, we assume that the server is already started
- `kill`: the process is automatically killed without a prompt

```js
module.exports = {
  command: 'npm run start --port 3000',
  port: 3000,
  usedPortAction: 'kill',
}
```

## Troubleshooting

- If using `port` makes the terminal to ask for root password although the port is valid and accessible then use `usePortAction: 'ignore'`.

## License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/jest-puppeteer.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/jest-puppeteer
[version-badge]: https://img.shields.io/npm/v/jest-dev-server.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-dev-server
[license-badge]: https://img.shields.io/npm/l/jest-dev-server.svg?style=flat-square
[license]: https://github.com/smooth-code/jest-puppeteer/blob/master/LICENSE
