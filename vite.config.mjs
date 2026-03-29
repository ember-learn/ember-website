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
        source !== 'ember-testing' &&
        source !== 'ember'
      ) {
        return null;
      }
      // Also handle standalone ember packages like 'rsvp'
      if (!source.includes('/')) {
        const filePath = `${base}/${source}/index.js`;
        if (existsSync(filePath)) return filePath;
        const flatPath = `${base}/${source}.js`;
        if (existsSync(flatPath)) return flatPath;
        return null;
      }

      // Skip @ember/-internals and other private paths
      const parts = source.split('/');
      if (parts[1].startsWith('-')) return null;

      // Try exact file path first: @ember/routing/route → routing/route.js
      const filePath = `${base}/${source}.js`;
      if (existsSync(filePath)) {
        return filePath;
      }

      // Try index: @ember/routing → routing/index.js
      const indexPath = `${base}/${source}/index.js`;
      if (existsSync(indexPath)) {
        return indexPath;
      }

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
      exclude: /node_modules\/(?!(@warp-drive|@ember-data|ember-data|ember-source)\/)/,
    }),
  ],
});
