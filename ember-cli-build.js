'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    ifa: {
      enabled: true,
      inline: true,
    },
    fingerprint: {
      // don't fingerprint images because we need to be able to access them dynamically
      // see more info here: https://github.com/ef4/prember/issues/52
      extensions: ['js', 'css', 'map'],
      generateAssetMap: true,
      fingerprintAssetMap: true,
    },
    prember: {
      urls: [
        '/',
        'community',
        'community/meetups',
        'community/meetups/assets',
        'community/meetups-getting-started',
        'ember-community-survey-2019',
        'ember-users',
        'guidelines',
        'learn',
        'learn/examples',
        'about/legal',
        'logos',
        'mascots',
        'security',
        'sponsors',
        'team',
        'mascots',
        'mascots/commission-sent',
        'mascots/commission',
        'mascots/faq',
        'mascots/payment-sent',
        'mascots/payment',
        'releases',
        'releases/release',
        'releases/canary',
        'releases/beta',
        'ember-community-survey-2016',
        'ember-community-survey-2017',
        'ember-community-survey-2018',
        'ember-community-survey-2019',
        'editions',
        'editions/octane',
      ]
    },
    'ember-cli-uglify': { // TODO: remove once this issue is fixed https://github.com/ember-cli/ember-cli/issues/8075
      uglify: {
        compress: {
          collapse_vars: false
        }
      }
    },
    emberHighCharts: {
      includeHighCharts: true,
      includeHighChartsMore: true,
      includeModules: ['drilldown'],
    },
  });

  app.import("node_modules/highlightjs/highlight.pack.js");
  app.import('vendor/shims/highlightjs.js');

  app.import("node_modules/markdown-it/dist/markdown-it.js", {
    using: [{ transformation: "amd", as: "markdown-it" }]
  });

  return app.toTree();
};
