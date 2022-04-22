import VerticalBarChart from 'ember-website/utils/highcharts/vertical-bar-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/vertical-bar-chart', function (hooks) {
  hooks.beforeEach(function () {
    this.chart = {
      categories: ['Beginner', 'Intermediate', 'Advanced'],
      title: 'Rank your web skills',
    };

    this.rawData = [
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
  });

  module('highchartsOptions', function () {
    test('returns a configuration object that is compatible with Highcharts', function (assert) {
      const { highchartsOptions } = new VerticalBarChart({
        chart: this.chart,
        rawData: this.rawData,
      });

      // We tested `legend` in a separate module
      delete highchartsOptions.legend;

      // We tested `series` in a separate module
      delete highchartsOptions.series;

      assert.deepEqual(
        highchartsOptions,
        {
          chart: {
            backgroundColor: 'transparent',
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
            labels: {
              format: '{value} %',
            },
            title: {
              text: 'Percent of responses',
            },
          },
        },
        'We get the correct value.'
      );
    });
  });

  module('isLegendEnabled', function () {
    test('returns true when series has more than 1 element', function (assert) {
      const rawData = this.rawData;

      const { isLegendEnabled } = new VerticalBarChart({
        chart: this.chart,
        rawData,
      });

      assert.true(isLegendEnabled, 'We get the correct value.');
    });

    test('returns false when series has 1 element', function (assert) {
      const rawData = [this.rawData[0]];

      const { isLegendEnabled } = new VerticalBarChart({
        chart: this.chart,
        rawData,
      });

      assert.false(isLegendEnabled, 'We get the correct value.');
    });

    test('returns false when series has 0 elements', function (assert) {
      const rawData = [];

      const { isLegendEnabled } = new VerticalBarChart({
        chart: this.chart,
        rawData,
      });

      assert.false(isLegendEnabled, 'We get the correct value.');
    });
  });

  module('series', function () {
    test('transforms rawData into an array that is compatible with Highcharts', function (assert) {
      const { series } = new VerticalBarChart({
        chart: this.chart,
        rawData: this.rawData,
      });

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
