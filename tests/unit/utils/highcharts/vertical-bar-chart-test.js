import VerticalBarChart, {
  createSeries,
} from 'ember-website/utils/highcharts/vertical-bar-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/vertical-bar-chart', function () {
  module('VerticalBarChart', function () {
    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new VerticalBarChart({
        chart: {
          categories: ['Beginner', 'Intermediate', 'Advanced'],
          title: 'Rank your web skills',
        },

        rawData: [
          {
            color: '#1A5E9A',
            label: 'ARIA',
            values: [68.3, 25.7, 6],
          },
          {
            color: '#32AADE',
            label: 'CSS',
            values: [9.6, 47.0, 43.4],
          },
          {
            color: '#F2682A',
            label: 'HTML',
            values: [1.9, 36.0, 62.1],
          },
          {
            color: '#F1BF28',
            label: 'JavaScript',
            values: [2.7, 35.9, 61.4],
          },
        ],
      }).highchartsOptions;

      assert.deepEqual(
        options,
        {
          chart: {
            type: 'column',
          },

          subtitle: {
            text: undefined,
          },

          title: {
            text: 'Rank your web skills',
          },

          tooltip: {
            pointFormat: '{series.name}: {point.y:.1f}%',
          },

          xAxis: {
            categories: ['Beginner', 'Intermediate', 'Advanced'],
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
      const rawData = [
        {
          color: '#1A5E9A',
          label: 'ARIA',
          values: [68.3, 25.7, 6],
        },
        {
          color: '#32AADE',
          label: 'CSS',
          values: [9.6, 47.0, 43.4],
        },
        {
          color: '#F2682A',
          label: 'HTML',
          values: [1.9, 36.0, 62.1],
        },
        {
          color: '#F1BF28',
          label: 'JavaScript',
          values: [2.7, 35.9, 61.4],
        },
      ];

      const series = createSeries(rawData);

      assert.strictEqual(series.length, 4, 'We see 4 series of data.');

      // Check series 1
      assert.deepEqual(
        series[0],
        {
          color: '#1A5E9A',
          data: [68.3, 25.7, 6],
          name: 'ARIA',
        },
        'We get the correct data for the 1st series.'
      );

      // Check series 2
      assert.deepEqual(
        series[1],
        {
          color: '#32AADE',
          data: [9.6, 47.0, 43.4],
          name: 'CSS',
        },
        'We get the correct data for the 2nd series.'
      );

      // Check series 3
      assert.deepEqual(
        series[2],
        {
          color: '#F2682A',
          data: [1.9, 36.0, 62.1],
          name: 'HTML',
        },
        'We get the correct data for the 3rd series.'
      );

      // Check series 4
      assert.deepEqual(
        series[3],
        {
          color: '#F1BF28',
          data: [2.7, 35.9, 61.4],
          name: 'JavaScript',
        },
        'We get the correct data for the 4th series.'
      );
    });
  });
});
