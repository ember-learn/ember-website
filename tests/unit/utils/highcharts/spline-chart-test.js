import SplineChart from 'ember-website/utils/highcharts/spline-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/spline-chart', function (hooks) {
  hooks.beforeEach(function () {
    this.chart = {
      categories: [
        '1.13',
        '2.0',
        '2.1',
        '2.2',
        '2.3',
        '2.4',
        '2.5',
        '2.6',
        '2.7',
        '2.8',
        '2.9',
        '2.10',
        '2.11',
        '2.12',
      ],
      title: 'Which versions of Ember Data are used in your apps?',
    };

    this.rawData = [
      {
        color: '#4b4b4b',
        label: '2016',
        values: [
          27,
          6,
          4,
          8,
          21,
          42,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      },
      {
        color: '#f23818',
        label: '2017',
        values: [9, 2.15, 2.1, 1.5, 2.8, 7, 3, 4, 4, 13.8, 7, 21.6, 34.9, 17],
      },
    ];
  });

  module('highchartsOptions', function () {
    test('returns a configuration object that is compatible with Highcharts', function (assert) {
      const { highchartsOptions } = new SplineChart({
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
            type: 'spline',
          },

          plotOptions: {
            series: {
              marker: {
                enabled: false,
              },
            },
          },

          subtitle: {
            text: undefined,
          },

          title: {
            text: 'Which versions of Ember Data are used in your apps?',
          },

          tooltip: {
            pointFormat: '{series.name}: {point.y:.1f}%',
          },

          xAxis: {
            categories: [
              '1.13',
              '2.0',
              '2.1',
              '2.2',
              '2.3',
              '2.4',
              '2.5',
              '2.6',
              '2.7',
              '2.8',
              '2.9',
              '2.10',
              '2.11',
              '2.12',
            ],
            type: 'category',
          },

          yAxis: {
            labels: {
              format: '{value} %',
            },
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

  module('isLegendEnabled', function () {
    test('returns true when series has more than 1 element', function (assert) {
      const rawData = this.rawData;

      const { isLegendEnabled } = new SplineChart({
        chart: this.chart,
        rawData,
      });

      assert.true(isLegendEnabled, 'We get the correct value.');
    });

    test('returns false when series has 1 element', function (assert) {
      const rawData = [this.rawData[0]];

      const { isLegendEnabled } = new SplineChart({
        chart: this.chart,
        rawData,
      });

      assert.false(isLegendEnabled, 'We get the correct value.');
    });

    test('returns false when series has 0 elements', function (assert) {
      const rawData = [];

      const { isLegendEnabled } = new SplineChart({
        chart: this.chart,
        rawData,
      });

      assert.false(isLegendEnabled, 'We get the correct value.');
    });
  });

  module('series', function () {
    test('transforms rawData into an array that is compatible with Highcharts', function (assert) {
      const { series } = new SplineChart({
        chart: this.chart,
        rawData: this.rawData,
      });

      assert.strictEqual(series.length, 2, 'We see 2 series of data.');

      // Check series 1
      assert.deepEqual(
        series[0],
        {
          color: '#4b4b4b',
          data: [
            27,
            6,
            4,
            8,
            21,
            42,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          name: '2016',
        },
        'We get the correct data for the 1st series.'
      );

      // Check series 2
      assert.deepEqual(
        series[1],
        {
          color: '#f23818',
          data: [9, 2.15, 2.1, 1.5, 2.8, 7, 3, 4, 4, 13.8, 7, 21.6, 34.9, 17],
          name: '2017',
        },
        'We get the correct data for the 2nd series.'
      );
    });
  });
});
