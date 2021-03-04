import VerticalBarChart, {
  createSeries,
} from 'ember-website/utils/highcharts/vertical-bar-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/vertical-bar-chart', function () {
  module('VerticalBarChart', function () {
    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new VerticalBarChart().highchartsOptions;

      assert.deepEqual(
        options,
        {
          chart: {
            type: 'column',
          },

          subtitle: {
            text: 'TODO: Allow subtitle',
          },

          title: {
            text: 'TODO: Allow title',
          },

          tooltip: {
            pointFormat: '{series.name}: {point.y:.1f}%',
          },

          xAxis: {
            categories: [],
            type: 'category',
          },

          yAxis: {
            title: {
              text: 'Percent of responses',
            },
          },
        },
        'We get the correct value.'
      );
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
