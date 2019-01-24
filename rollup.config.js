import browsersync from 'rollup-plugin-browsersync';
import postcss from 'rollup-plugin-postcss';
import postcssNormalize from 'postcss-normalize';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProduction  = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;


module.exports = {
  input : 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    (isProduction && terser()),
    (isProduction && filesize()),
    (isDevelopment && browsersync({server: 'public'})),
    postcss({
      extract  : true,
      sourceMap: true,
      plugins  : [
        postcssNormalize(),
        autoprefixer(),
        cssnano({
          preset: 'default',
        })
      ]
    }),
    resolve({
      jsnext: true,
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      include: 'node_modules/**',
      ignoreGlobal: false,
      sourceMap: true,
    })
  ]
}
