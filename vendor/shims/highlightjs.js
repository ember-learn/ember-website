(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['hljs'],
      __esModule: true,
    };
  }

  define('highlightjs', [], vendorModule);
})();
