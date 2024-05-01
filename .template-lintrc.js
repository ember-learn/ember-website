'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'no-curly-component-invocation': {
      allow: ['format-date-time', 'html-safe', 'printf'],
    },
  },
};
