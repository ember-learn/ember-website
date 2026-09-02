export default {
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: ['*.{cjs,cts,js,mjs,mts,ts}'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['*.{gjs,gts}'],
      options: {
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
  ],
};
