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
      includeModules: ['drilldown'],
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
        'ember-community-survey-2016',
        'ember-community-survey-2017',
        'ember-community-survey-2018',
        'ember-community-survey-2019',
        'ember-community-survey-2020',
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
        'teams',
      ],
    },
  });

  return app.toTree();
};
