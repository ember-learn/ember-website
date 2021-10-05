import { formatURLConditional } from 'ember-website/utils/format-url';
import { module, test } from 'qunit';

module('Unit | Utility | format-url', function () {
  module('formatURLConditional', function () {
    test('We can format URL', function (assert) {
      assert.strictEqual(
        formatURLConditional('https://emberjs.com/logos#Branding'),
        'https://emberjs.com/logos/#Branding',
        'If # in URL, we add / before #'
      );
      assert.strictEqual(
        formatURLConditional('http://localhost:4200/mascots?filter=tomster/'),
        'http://localhost:4200/mascots?filter=tomster',
        'If ? in URL, we remove trailing /'
      );
      assert.strictEqual(
        formatURLConditional('http://localhost:4200/community'),
        'http://localhost:4200/community/',
        'If neither # or ? in URL, we add trailing /'
      );
    });
  });
});
