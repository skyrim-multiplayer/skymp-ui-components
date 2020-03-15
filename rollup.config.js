import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: true
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      tsconfig: "tsconfig.json",
      rollupCommonJSResolveHack: true,
      clean: true,
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.(tsx|ts)"]
    }),
    commonjs(),
    terser(),
    copy({
      targets: [{ src: "src/resources/fonts", dest: "dist/resources/fonts" }]
    })
  ]
};
