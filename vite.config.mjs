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
      // Process ember-source and v2 addons that have uncompiled @embroider/macros.
      // Use a function to handle pnpm's deep node_modules paths.
      filter: {
        exclude: {
          id(id) {
            if (!id.includes('node_modules')) return false;
            // Extract the package name from the last node_modules/ segment
            const lastNM = id.lastIndexOf('node_modules/');
            if (lastNM === -1) return false;
            const rest = id.slice(lastNM + 'node_modules/'.length);
            // Include ember-source and @ember/test-waiters
            if (rest.startsWith('ember-source/')) return false;
            if (rest.startsWith('@ember/test-waiters/')) return false;
            return true;
          },
        },
      },
    }),
  ],
});
