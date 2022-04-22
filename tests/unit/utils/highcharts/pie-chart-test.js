import PieChart from 'ember-website/utils/highcharts/pie-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/pie-chart', function (hooks) {
  hooks.beforeEach(function () {
    this.chart = {
      title: 'Do you internationalize your applications?',
    };

    this.rawData = [
      { color: '#1E719B', label: 'Yes', value: 480 },
      { color: '#E04E39', label: 'No', value: 267 },
    ];
  });

  module('highchartsOptions', function () {
    test('returns a configuration object that is compatible with Highcharts', function (assert) {
      const { highchartsOptions } = new PieChart({
        chart: this.chart,
        rawData: this.rawData,
      });

      // We tested `series` in a separate module
      delete highchartsOptions.series;

      assert.deepEqual(
        highchartsOptions,
        {
          chart: {
            backgroundColor: 'transparent',
            type: 'pie',
          },

          subtitle: {
            text: undefined,
          },

          title: {
            text: 'Do you internationalize your applications?',
          },

          tooltip: {
            pointFormat: '{point.y:.1f}%',
          },
        },
        'We get the correct value.'
      );
    });
  });

  module('series', function () {
    test('transforms rawData into an array that is compatible with Highcharts', function (assert) {
      const { series } = new PieChart({
        chart: this.chart,
        rawData: this.rawData,
      });

      assert.strictEqual(series.length, 1, 'We see 1 series of data.');

      // Check series 1
      const colors = series[0].colors;

      const data = series[0].data.map((datum) => {
        const { name, y } = datum;

        return {
          name,
          y: Math.round(y),
        };
      });

      assert.deepEqual(
        colors,
        ['#1E719B', '#E04E39'],
        'We get the correct colors for the 1st series.'
      );

      assert.deepEqual(
        data,
        [
          {
            name: 'Yes',
            y: 64,
          },
          {
            name: 'No',
            y: 36,
          },
        ],
        'We get the correct data for the 1st series.'
      );
    });
  });
});
