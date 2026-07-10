'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    // We use BEM naming conventions which aren't compatible with the kebap-case convention that stylelint-config-standard expects
    'selector-class-pattern': null,
  },
};
