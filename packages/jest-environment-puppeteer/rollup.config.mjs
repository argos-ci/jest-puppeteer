import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";

const bundle = (config) => ({
  external: (id) => {
    return !/^[./]/.test(id);
  },
  ...config,
});

const swcPlugin = swc(
  defineRollupSwcOption({
    jsc: { target: "es2021" },
  })
);

export default [
  bundle({
    input: "src/global.js",
    output: {
      file: "lib/global.js",
      format: "cjs",
    },
    plugins: [swcPlugin],
  }),
  bundle({
    input: "src/env.js",
    output: {
      file: "lib/env.js",
      format: "cjs",
    },
    plugins: [swcPlugin],
  }),
];
