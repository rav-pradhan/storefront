import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const name = "StoreFrontJS";

export default {
  input: "./src/index.ts",
  external: [],

  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: "bundled",
      include: ["src/**/*"],
    }),
  ],

  output: [
    {
      file: pkg.main,
      format: "cjs",
      plugins: [terser()]
    },
    {
      file: pkg.module,
      format: "es",
      plugins: [terser()]
    }
  ],
};
