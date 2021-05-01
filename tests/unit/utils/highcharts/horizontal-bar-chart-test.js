import HorizontalBarChart, {
  createSeries,
} from 'ember-website/utils/highcharts/horizontal-bar-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/horizontal-bar-chart', function () {
  module('HorizontalBarChart', function () {
    test('highchartsOptions returns an options object', function (assert) {
      const options = new HorizontalBarChart({
        chart: {
          categories: [
            'Writing RFCs',
            'Commenting on RFCs',
            'Reading RFCs',
            'Opening PRs',
            'Stack Overflow',
            'emberjs.com blog',
          ],
          subtitle: 'Movers and Shakers from Last Year',
          title: 'How do you stay up to date with Ember?',
        },

        rawData: [
          {
            color: '#4B4B4B',
            label: '2017',
            values: [1.9, 5.2, 33.3, 16.4, 41.6, 49.8],
          },
          {
            color: '#F23818',
            label: '2018',
            values: [3.0, 9.8, 52.2, 23.8, 34.2, 57.8],
          },
        ],
      }).highchartsOptions;

      delete options.series;

      assert.deepEqual(
        options,
        {
          chart: {
            backgroundColor: 'transparent',
            type: 'bar',
          },

          subtitle: {
            text: 'Movers and Shakers from Last Year',
          },

          title: {
            text: 'How do you stay up to date with Ember?',
          },

          tooltip: {
            pointFormat: '{series.name}: {point.y:.1f}%',
          },

          xAxis: {
            categories: [
              'Writing RFCs',
              'Commenting on RFCs',
              'Reading RFCs',
              'Opening PRs',
              'Stack Overflow',
              'emberjs.com blog',
            ],
            type: 'category',
          },

          yAxis: {
            min: 0,
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
      const rawData = [
        {
          color: '#4B4B4B',
          label: '2017',
          values: [1.9, 5.2, 33.3, 16.4, 41.6, 49.8],
        },
        {
          color: '#F23818',
          label: '2018',
          values: [3.0, 9.8, 52.2, 23.8, 34.2, 57.8],
        },
      ];

      const series = createSeries(rawData);

      assert.strictEqual(series.length, 2, 'We see 2 series of data.');

      // Check series 1
      assert.deepEqual(
        series[0],
        {
          color: '#4B4B4B',
          data: [1.9, 5.2, 33.3, 16.4, 41.6, 49.8],
          name: '2017',
        },
        'We get the correct data for the 1st series.'
      );

      // Check series 2
      assert.deepEqual(
        series[1],
        {
          color: '#F23818',
          data: [3.0, 9.8, 52.2, 23.8, 34.2, 57.8],
          name: '2018',
        },
        'We get the correct data for the 2nd series.'
      );
    });
  });
});
