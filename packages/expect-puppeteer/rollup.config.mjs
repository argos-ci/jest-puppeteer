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
    input: "src/index.js",
    output: {
      file: "lib/index.js",
      format: "cjs",
    },
    plugins: [swcPlugin],
  }),
];
