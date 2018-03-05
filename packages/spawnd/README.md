# spawnd

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Spawn a process inter-dependent with parent process.

```
npm install spawnd
```

## Usage

```js
import spawnd from 'spawnd'

const proc = spawnd('node server.js', { shell: true })

proc.destroy().then(() => {
  console.log('Destroyed!')
})
```

## API

### spawnd(command[, args[, options]])

Exactly the same API as [Node.js spawn](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).

It returns a [Child Process](https://nodejs.org/api/child_process.html#child_process_class_childprocess) that exposes a destroy method that will kill the process.

## License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/jest-puppeteer.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/jest-puppeteer
[version-badge]: https://img.shields.io/npm/v/spawnd.svg?style=flat-square
[package]: https://www.npmjs.com/package/spawnd
[license-badge]: https://img.shields.io/npm/l/spawnd.svg?style=flat-square
[license]: https://github.com/smooth-code/jest-puppeteer/blob/master/LICENSE
