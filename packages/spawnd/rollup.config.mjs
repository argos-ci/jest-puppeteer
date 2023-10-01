import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";
import * as url from "node:url";

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
      baseUrl: url.fileURLToPath(new URL(".", import.meta.url)),
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
    output: {
      file: "dist/index.js",
      format: "cjs",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
  }),
];
