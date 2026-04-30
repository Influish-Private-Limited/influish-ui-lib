import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "framer-motion",
];

// Shared plugins (JS/TS build)
const basePlugins = [
  peerDepsExternal(),

  resolve({
    extensions: [".js", ".ts", ".tsx"],
  }),

  commonjs(),

  // ✅ CSS Modules support with Tailwind
  postcss({
    modules: {
      auto: true,
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    extract: true, // separate CSS file (best for libraries)
    minimize: true,
    sourceMap: true,
  }),

  typescript({
    tsconfig: "./tsconfig.build.json",
    sourceMap: true,
    inlineSources: true,
  }),
];

export default [
  // 🔹 ESM build
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
    external,
    plugins: basePlugins,
  },

  // 🔹 CJS build
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    external,
    plugins: basePlugins,
  },

  // 🔹 Type declarations
  {
    input: "src/index.ts",
    output: {
      file: pkg.types,
      format: "esm",
    },
    external,
    plugins: [
      {
        name: "ignore-css",
        resolveId(id) {
          if (id.endsWith(".css")) return id;
          return null;
        },
        load(id) {
          if (id.endsWith(".css")) return "";
          return null;
        }
      },
      dts()
    ],
  },
];