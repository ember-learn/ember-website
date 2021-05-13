import { highchartsOptions } from 'ember-website/utils/highcharts';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts', function () {
  module('highchartsOptions', function () {
    test('returns an object with valid Highcharts configuration options', function (assert) {
      const { credits, plotOptions, time } = highchartsOptions;

      assert.strictEqual(
        credits?.enabled,
        false,
        'We hide the credits for Highcharts.'
      );

      assert.strictEqual(
        plotOptions?.series?.shadow,
        false,
        'We do not apply shadow to the graph line.'
      );

      assert.ok('timezoneOffset' in time, 'We account for timezone offset.');
    });
  });
});
