import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/min/bundle.min.js',
        format: 'iife',
        name: 'version',
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(), //DOCS: Resolves third-party module dependencies.
      commonjs(), //DOCS: Converts CommonJS modules to ESM.
      typescript({
        tsconfig: './tsconfig.json',
      }), //DOCS:  Compiles TypeScript files
      postcss({
        extensions: ['.css'],
        minimize: true,
        inject: true,
        extract: false,
        modules: true,
      }), //DOCS: Processes CSS files with PostCSS, injecting the styles into the bundled JavaScript.
    ],
  },
  //   DOCS: Generating a TypeScript declaration file (.d.ts) for a library or package is essential
  //     - providing better type information
  //     - improving the devX when consuming the library in other TypeScript projects.
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()], // DOCS: dts methods genrates TS declaration file
    external: [/\.css$/], //Excludes CSS files from being bundled.
  },
];
