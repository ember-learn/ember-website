const environment = import.meta.env.DEV ? 'development' : 'production';

const config = {
  modulePrefix: 'ember-website',
  environment,
  rootURL: '/',
  locationType: 'trailing-history',
  historySupportMiddleware: true,
  EmberENV: {
    EXTEND_PROTOTYPES: false,
  },

  APP: {},

  'ember-algolia': {
    algoliaId: 'BH4D9OD16A',
    algoliaKey: '760969ef081fcadc7e0e60faefdb0907',
  },

  pageTitle: {
    separator: ' - ',
    prepend: true,
  },
};

export function enterTestMode() {
  config.locationType = 'none';
  config.APP.rootElement = '#ember-testing';
  config.APP.autoboot = false;
}

export default config;
