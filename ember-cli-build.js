'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },

    'ember-composable-helpers': {
      only: ['filter-by', 'reject-by', 'sort-by'],
    },

    emberHighCharts: {
      includeHighCharts: true,
      includeHighChartsMore: true,
    },

    'ember-leaflet': {
      excludeJS: true,
    },

    fingerprint: {
      // don't fingerprint images because we need to be able to access them dynamically
      // see more info here: https://github.com/ef4/prember/issues/52
      extensions: ['js', 'css', 'map'],
      generateAssetMap: true,
      fingerprintAssetMap: true,
    },

    ifa: {
      enabled: true,
      inline: true,
    },

    minifyCSS: {
      options: { processImport: true },
    },

    prember: {
      urls: [
        '/',
        'about/legal',
        'browser-support',
        'community',
        'community/black-lives-matter',
        'community/meetups',
        'community/meetups/assets',
        'community/meetups-getting-started',
        'editions',
        'editions/octane',
        'ember-users',
        'guidelines',
        'learn',
        'learn/examples',
        'logos',
        'mascots',
        'mascots/commission',
        'mascots/commission-sent',
        'mascots/faq',
        'mascots/payment',
        'mascots/payment-sent',
        'releases',
        'releases/beta',
        'releases/canary',
        'releases/lts',
        'releases/release',
        'security',
        'sponsors',
        'survey/2016',
        'survey/2017',
        'survey/2018',
        'survey/2019',
        'survey/2020',
        'survey/2021',
        'teams',
      ],
    },

    'responsive-image': {
      images: [
        {
          include: 'images/team/*',
          widths: [100, 200],
          lqip: {
            type: 'blurhash',
          },
          removeSource: true,
          // don't scale images, just copy as-is in dev mode, to not slow down the build
          justCopy: process.env.EMBER_ENV !== 'production',
        },
        {
          include: 'images/tomsters/**/*.png',
          widths: [
            320, // mobile
            640, // mobile 2x
            750, // iPhone 2x
            242, // desktop
            484, // desktop 2x
          ],
          removeSource: false,
          // don't scale images, just copy as-is in dev mode, to not slow down the build
          justCopy: process.env.EMBER_ENV !== 'production',
        },
      ],
    },
  });

  return app.toTree();
};
