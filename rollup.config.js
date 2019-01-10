import browsersync from 'rollup-plugin-browsersync';
import scss from 'rollup-plugin-scss';


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;


module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife'
  },
  plugins: [
    (isDevelopment && browsersync({server: 'public'}))
  ]

}
