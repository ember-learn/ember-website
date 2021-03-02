import AreaSplineChart, {
  createSeries,
} from 'ember-website/utils/highcharts/area-spline-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/area-spline-chart', function () {
  module('AreaSplineChart', function () {
    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new AreaSplineChart().highchartsOptions;

      assert.deepEqual(
        options,
        {
          chart: {
            type: 'areaspline',
          },

          subtitle: {
            text: 'TODO: Allow subtitle',
          },

          title: {
            text: 'TODO: Allow title',
          },

          tooltip: {
            pointFormat: '{point.y:.1f}%',
          },

          xAxis: {},

          yAxis: {},
        },
        'We get the correct value.'
      );
    });
  });

  module('createSeries', function () {
    test('returns the series object', function (assert) {
      const rawData = [
        {
          color: '#1E719B',
          label: '2019',
          values: [
            100 * (79 / 1232),
            100 * (443 / 1232),
            100 * (488 / 1232),
            100 * (675 / 1232),
            undefined,
            undefined,
          ],
        },
        {
          color: '#9B2918',
          label: '2020',
          values: [
            100 * (27 / 1006),
            100 * (111 / 1006),
            100 * (121 / 1006),
            100 * (148 / 1006),
            100 * (291 / 1006),
            100 * (524 / 1006),
          ],
        },
      ];

      const series = createSeries(rawData);

      assert.strictEqual(series.length, 2, 'We see 2 series of data.');

      // Check series 1
      assert.deepEqual(
        {
          color: series[0].color,
          data: series[0].data.map(Math.round),
          name: series[0].name,
        },
        {
          color: '#1E719B',
          data: [6, 36, 40, 55, NaN, NaN],
          name: '2019',
        },
        'We get the correct data for the 1st series.'
      );

      // Check series 2
      assert.deepEqual(
        {
          color: series[1].color,
          data: series[1].data.map(Math.round),
          name: series[1].name,
        },
        {
          color: '#9B2918',
          data: [3, 11, 12, 15, 29, 52],
          name: '2020',
        },
        'We get the correct data for the 2nd series.'
      );
    });
  });
});
