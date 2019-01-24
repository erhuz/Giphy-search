import browsersync from 'rollup-plugin-browsersync';
import postcss from 'rollup-plugin-postcss';
import postcssNormalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProduction  = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;


module.exports = {
  input : 'src/scripts/index.js',
  output: {
    file  : 'public/giphy.js',
    format: 'iife'
  },
  plugins: [
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
    (isDevelopment && browsersync({server: 'public'}))
  ]
}
