import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";

const bundle = (config) => ({
  input: "src/index.ts",
  external: (id) => {
    return !/^[./]/.test(id) || id === "./index.js";
  },
  ...config,
});

const swcPlugin = swc(
  defineRollupSwcOption({
    jsc: {
      parser: {
        syntax: "typescript",
      },
    },
    env: {
      targets: "node 16",
    },
  })
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
