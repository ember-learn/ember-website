import SplineChart, {
  createSeries,
} from 'ember-website/utils/highcharts/spline-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/spline-chart', function () {
  module('SplineChart', function () {
    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new SplineChart({
        chart: {
          categories: ['6', '5', '4', '3', '2', '1', '0'],
          title: 'Which versions of Ember Data are used in your apps?',
          subtitle: 'Some subtitle',
          tooltip: () => {
            return `${this.point}`;
          },
        },
        rawData: [
          {
            label: '2016',
            color: '#1E1E1E',
            values: [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              { value: 27, label: '1.13' },
              { value: 6, label: '2.0' },
              { value: 4, label: '2.1' },
              { value: 8, label: '2.2' },
              { value: 21, label: '2.3' },
              { value: 42, label: '2.4' },
              null,
            ],
          },
          {
            label: '2017',
            color: '#FFFFFF',
            values: [
              { value: 9, label: '1.13' },
              { value: 2.15, label: '2.0' },
              { value: 2.1, label: '2.1' },
              { value: 1.5, label: '2.2' },
              { value: 2.8, label: '2.3' },
              { value: 7, label: '2.4' },
              { value: 3, label: '2.5' },
              { value: 4, label: '2.6' },
              { value: 4, label: '2.7' },
              { value: 13.8, label: '2.8' },
              { value: 7, label: '2.9' },
              { value: 21.6, label: '2.10' },
              { value: 34.9, label: '2.11' },
              { value: 17, label: 'stable (2.12)' },
            ],
          },
        ],
      }).highchartsOptions;

      assert.deepEqual(
        options,
        {
          chart: {
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
            text: 'Some subtitle',
          },

          title: {
            text: 'Which versions of Ember Data are used in your apps?',
          },

          tooltip: {
            crosshairs: true,
            formatter: function tooltip() {
              return `${this.point}`;
            },
            shared: true,
          },

          xAxis: {
            categories: ['6', '5', '4', '3', '2', '1', '0'],
            type: 'category',
          },

          yAxis: {
            title: {
              text: 'Percent',
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
          label: '2016',
          color: '#555',
          values: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            { value: 27, label: '1.13' },
            { value: 6, label: '2.0' },
            { value: 4, label: '2.1' },
            { value: 8, label: '2.2' },
            { value: 21, label: '2.3' },
            { value: 42, label: '2.4' },
            null,
          ],
        },
        {
          label: '2017',
          color: '#444',
          values: [
            { value: 9, label: '1.13' },
            { value: 2.15, label: '2.0' },
            { value: 2.1, label: '2.1' },
            { value: 1.5, label: '2.2' },
            { value: 2.8, label: '2.3' },
            { value: 7, label: '2.4' },
            { value: 3, label: '2.5' },
            { value: 4, label: '2.6' },
            { value: 4, label: '2.7' },
            { value: 13.8, label: '2.8' },
            { value: 7, label: '2.9' },
            { value: 21.6, label: '2.10' },
            { value: 34.9, label: '2.11' },
            { value: 17, label: 'stable (2.12)' },
          ],
        },
      ];

      const series = createSeries(rawData);

      assert.strictEqual(series.length, 2, 'We see 2 series of data.');

      // Check series 1
      assert.deepEqual(
        {
          color: series[0].color,
          data: series[0].data,
          year: series[0].name,
        },
        {
          color: '#555',
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            { value: 27, label: '1.13' },
            { value: 6, label: '2.0' },
            { value: 4, label: '2.1' },
            { value: 8, label: '2.2' },
            { value: 21, label: '2.3' },
            { value: 42, label: '2.4' },
            null,
          ],
          year: '2016',
        },
        'We get the correct data for the 1st series.'
      );

      // Check series 2
      assert.deepEqual(
        {
          color: series[1].color,
          data: series[1].data,
          year: series[1].name,
        },
        {
          color: '#444',
          data: [
            { value: 9, label: '1.13' },
            { value: 2.15, label: '2.0' },
            { value: 2.1, label: '2.1' },
            { value: 1.5, label: '2.2' },
            { value: 2.8, label: '2.3' },
            { value: 7, label: '2.4' },
            { value: 3, label: '2.5' },
            { value: 4, label: '2.6' },
            { value: 4, label: '2.7' },
            { value: 13.8, label: '2.8' },
            { value: 7, label: '2.9' },
            { value: 21.6, label: '2.10' },
            { value: 34.9, label: '2.11' },
            { value: 17, label: 'stable (2.12)' },
          ],
          year: '2017',
        },
        'We get the correct data for the 2nd series.'
      );
    });
  });
});
