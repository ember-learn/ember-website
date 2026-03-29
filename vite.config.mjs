import { defineConfig } from 'vite';
import { extensions, ember, hbs } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Vite plugin that resolves @ember/* and @glimmer/* virtual module imports
 * to the actual files inside ember-source/dist/packages/.
 */
function emberSourceResolver() {
  const base = resolve('node_modules/ember-source/dist/packages');

  return {
    name: 'ember-source-resolver',
    enforce: 'pre',
    resolveId(source) {
      if (
        !source.startsWith('@ember/') &&
        !source.startsWith('@glimmer/') &&
        source !== 'rsvp' &&
        !source.startsWith('ember-testing') &&
        source !== 'ember'
      ) {
        return null;
      }
      if (!source.includes('/')) {
        const filePath = `${base}/${source}/index.js`;
        if (existsSync(filePath)) return filePath;
        const flatPath = `${base}/${source}.js`;
        if (existsSync(flatPath)) return flatPath;
        return null;
      }

      const filePath = `${base}/${source}.js`;
      if (existsSync(filePath)) return filePath;

      const indexPath = `${base}/${source}/index.js`;
      if (existsSync(indexPath)) return indexPath;

      return null;
    },
  };
}

export default defineConfig({
  optimizeDeps: {
    exclude: ['ember-source'],
  },
  plugins: [
    hbs(),
    emberSourceResolver(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      configFile: './babel.config.mjs',
      // Don't recompile templates in pre-built v2 addon dist files
      exclude: /node_modules\/(?!ember-source\/)/,
    }),
  ],
});
