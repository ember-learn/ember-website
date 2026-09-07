import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import babelParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginEmberTemplateLint from 'eslint-plugin-ember/configs/template-lint-migration';
import eslintPluginEmber from 'eslint-plugin-ember/recommended';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginQunit from 'eslint-plugin-qunit';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const parserOptions = {
  esm: {
    js: {
      babelOptions: {
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: 'legacy',
            },
          ],
        ],
      },
      ecmaFeatures: {
        modules: true,
      },
      ecmaVersion: 'latest',
      requireConfigFile: false,
    },
    ts: {
      projectService: true,
      tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
    },
  },
};

export default defineConfig([
  globalIgnores(['dist/', 'coverage/', '!**/.*']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  eslint.configs.recommended,
  eslintPluginEmber.configs.base,
  eslintPluginEmber.configs.gjs,
  eslintPluginEmber.configs.gts,
  eslintPluginEmberTemplateLint,
  eslintConfigPrettier,

  /**
   * https://eslint.org/docs/latest/use/configure/configuration-files#configuring-linter-options
   */
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
    },
  },
  {
    files: ['**/*.{js,gjs}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: parserOptions.esm.js,
    },
  },
  {
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // https://github.com/ember-cli/ember-addon-blueprint/issues/119
      {
        ...tseslint.configs.eslintRecommended,
        files: undefined,
      },
      eslintPluginEmber.configs.gts,
    ],
    files: ['**/*.{ts,gts}'],
    languageOptions: {
      globals: globals.browser,
      parser: eslintPluginEmber.parser,
      parserOptions: parserOptions.esm.ts,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  {
    ...eslintPluginQunit.configs.recommended,
    files: ['tests/**/*-test.{js,gjs,ts,gts}'],
    plugins: {
      qunit: eslintPluginQunit,
    },
  },
  /**
   * CJS node files
   */
  {
    ...eslintPluginN.configs['flat/recommended-script'],
    files: [
      '**/*.cjs',
      'blueprints/**/*.js',
      'config/**/*.js',
      'lib/**/*.js',
      'ember-cli-build.js',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: globals.node,
    },
    plugins: {
      n: eslintPluginN,
    },
  },
  /**
   * ESM node files
   */
  {
    ...eslintPluginN.configs['flat/recommended-module'],
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      parserOptions: parserOptions.esm.js,
      sourceType: 'module',
    },
    plugins: {
      n: eslintPluginN,
    },
  },
]);
