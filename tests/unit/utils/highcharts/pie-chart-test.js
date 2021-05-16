import PieChart, {
  createSeries,
} from 'ember-website/utils/highcharts/pie-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/pie-chart', function () {
  module('PieChart', function () {
    test('highchartsOptions returns an object that is compatible with Highcharts', function (assert) {
      const { highchartsOptions } = new PieChart({
        chart: {
          title: 'Do you internationalize your applications?',
        },

        rawData: [
          { color: '#1E719B', label: 'Yes', value: 480 },
          { color: '#E04E39', label: 'No', value: 267 },
        ],
      });

      // series has been tested through the createSeries test module
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

  module('createSeries', function () {
    test('returns the series object', function (assert) {
      const rawData = [
        { color: '#1E719B', label: 'Yes', value: 480 },
        { color: '#E04E39', label: 'No', value: 267 },
      ];

      const series = createSeries(rawData);

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
