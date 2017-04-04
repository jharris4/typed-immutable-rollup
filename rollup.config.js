import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import node from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

let pkg = require('./package.json');

let babelConfig = Object.assign({}, pkg.babel);

babelConfig.babelrc = false;
babelConfig.exclude = 'node_modules/**';

let es2015Index = babelConfig.presets.indexOf('es2015');
babelConfig.presets[es2015Index] = 'es2015-rollup';

let externalPackages = [
  "immutable"
];
let globalPackages = {
  "immutable": "Immutable"
};

export default {
  dest: 'dist/typed-immutable-rollup.js',
  entry: 'src/index.js',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    node(),
    babel(babelConfig), // order changed, see: https://github.com/rollup/rollup/issues/1148#issuecomment-275922534
    commonjs({
      'namedExports': { // needed because typed-immutable doesn't have a default export, and isn't bundled properly
        'typed-immutable': [
          'Record',
          'List',
          'Map',
          'Typed',
          'typeOf',
          'Type',
          'Any',
          'Union',
          'Maybe'
        ]
      }
    })
  ],
  external: externalPackages,
  globals: globalPackages,
  format: 'umd',
  moduleName: 'TypedImmutableRollup',
  sourceMap: true
};