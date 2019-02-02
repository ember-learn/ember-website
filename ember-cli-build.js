'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    ifa: {
      enabled: true,
      inline: true,
    },
    fingerprint: {
      generateAssetMap: true,
      fingerprintAssetMap: true,
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    },
    prember: {
      urls: [
        'about',
        'blog',
        'community',
        'community/meetups',
        'community/meetups-getting-started',
        'documentation',
        'ember-users',
        'guidelines',
        'learn',
        'learn/examples',
        'legal',
        'logos',
        'mascots',
        'meetup-assets',
        'security',
        'sponsors',
        'team',
        'mascots',
        'mascots/commission-sent',
        'mascots/commission',
        'mascots/faq',
        'mascots/payment-sent',
        'mascots/payment',
        'zoey',
      ]
    },
    "ember-bootstrap": {
      bootstrapVersion: 4,
      importBootstrapFont: false,
      importBootstrapCSS: false
    },
    'ember-cli-uglify': { // TODO: remove once this issue is fixed https://github.com/ember-cli/ember-cli/issues/8075
      uglify: {
        compress: {
          collapse_vars: false
        }
      }
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
