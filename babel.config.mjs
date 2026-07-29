import { buildMacros } from '@embroider/macros/babel';
import { setConfig } from '@warp-drive/build-config';

const macros = buildMacros({
  configure(config) {
    config.setGlobalConfig(import.meta.filename, '@embroider/core', {
      active: true,
    });
    setConfig(config, { compatWith: '5.6' });
  },
});

export default {
  plugins: [
    [
      'babel-plugin-ember-template-compilation',
      {
        enableLegacyModules: [
          'ember-cli-htmlbars',
          'ember-cli-htmlbars-inline-precompile',
          'htmlbars-inline-precompile',
        ],
        transforms: [...macros.templateMacros],
      },
    ],
    [
      'module:decorator-transforms',
      {
        runtime: {
          import: import.meta.resolve('decorator-transforms/runtime-esm'),
        },
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: import.meta.dirname,
        useESModules: true,
        regenerator: false,
      },
    ],
    ...macros.babelMacros,
  ],

  generatorOpts: {
    compact: false,
  },
};
