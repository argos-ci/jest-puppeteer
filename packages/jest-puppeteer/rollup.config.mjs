import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";

const bundle = (config) => ({
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
    input: "src/globals.ts",
    output: {
      file: "dist/globals.js",
      format: "cjs",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    input: "src/globals.ts",
    plugins: [dts()],
    output: {
      file: "dist/globals.d.ts",
      format: "es",
    },
  }),
];
