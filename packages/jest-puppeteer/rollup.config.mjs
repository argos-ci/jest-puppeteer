import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";
import * as url from "node:url";

const bundle = (config) => ({
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
      target: "es2022",
      externalHelpers: false,
    },
  }),
);

export default [
  bundle({
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
  }),
];
