import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";

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
      target: "es2021",
      parser: {
        syntax: "typescript",
      },
    },
  })
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
    input: "src/globals.ts",
    output: {
      file: "dist/globals.js",
      format: "cjs",
      interop: "compat",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    input: "src/globals.ts",
    plugins: [dts()],
    output: {
      file: "dist/globals.d.ts",
      format: "es",
      exports: "default",
    },
  }),
  bundle({
    output: {
      file: "dist/index.js",
      format: "cjs",
      interop: "compat",
      exports: "default",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: "es",
      exports: "default",
    },
  }),
];
