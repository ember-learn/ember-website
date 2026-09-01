import { formatURL } from 'ember-website/utils/format-url';
import { module, test } from 'qunit';

module('Unit | Utility | format-url', function () {
  module('When # is in the URL', function () {
    test('We add / before #', function (assert) {
      const url = formatURL('https://emberjs.com/survey/2019#ember-version');

      assert.strictEqual(
        url,
        'https://emberjs.com/survey/2019/#ember-version',
        'If # in URL, we add / before #'
      );
    });

    test('formatURL is idempotent', function (assert) {
      const url = formatURL('https://emberjs.com/survey/2019#ember-version');

      assert.strictEqual(
        formatURL(url),
        'https://emberjs.com/survey/2019/#ember-version',
        'We get the same URL back.'
      );
    });
  });

  module('When ? is in the URL', function () {
    test('We remove trailing /', function (assert) {
      const url = formatURL('https://emberjs.com/mascots?filter=tomster/');

      assert.strictEqual(
        url,
        'https://emberjs.com/mascots?filter=tomster',
        'If ? in URL, we remove trailing /'
      );
    });

    test('formatURL is idempotent', function (assert) {
      const url = formatURL('https://emberjs.com/mascots?filter=tomster/');

      assert.strictEqual(
        formatURL(url),
        'https://emberjs.com/mascots?filter=tomster',
        'We get the same URL back.'
      );
    });
  });

  module('When neither # nor ? is in the URL', function () {
    test('We add trailing /', function (assert) {
      const url = formatURL('https://emberjs.com/community');

      assert.strictEqual(
        url,
        'https://emberjs.com/community/',
        'If neither # nor ? in URL, we add trailing /'
      );
    });

    test('formatURL is idempotent', function (assert) {
      const url = formatURL('https://emberjs.com/community');

      assert.strictEqual(
        formatURL(url),
        'https://emberjs.com/community/',
        'We get the same URL back.'
      );
    });
  });
});
