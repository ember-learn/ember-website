import AreaSplineChart, {
  createSeries,
} from 'ember-website/utils/highcharts/area-spline-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/area-spline-chart', function () {
  module('AreaSplineChart', function () {
    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new AreaSplineChart().highchartsOptions;

      assert.deepEqual(options, {}, 'We get the correct value.');
    });
  });

  module('createSeries', function () {
    test('returns the series object', function (assert) {
      const rawData = [];

      const series = createSeries(rawData);

      assert.strictEqual(series.length, 0, 'We see 0 series of data.');
    });
  });
});
