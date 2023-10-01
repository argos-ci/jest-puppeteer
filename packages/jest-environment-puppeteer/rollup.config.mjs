import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";
import * as url from 'node:url';

const bundle = (config) => ({
  input: "src/index.ts",
  external: (id) => {
    return !/^[./]/.test(id);
  },
  ...config,
});

const swcPlugin = swc(
  defineRollupSwcOption({
    jsc: {
      baseUrl: url.fileURLToPath(new URL('.', import.meta.url)),
      parser: {
        syntax: "typescript",
      },
      target: "es2021",
      externalHelpers: false,
    },
  }),
);

export default [
  bundle({
    input: "src/global-init.ts",
    output: {
      file: "dist/global-init.js",
      format: "cjs",
      interop: "compat",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    output: {
      file: "dist/index.js",
      format: "cjs",
      interop: "compat",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: "es",
      interop: "compat",
    },
  }),
];
