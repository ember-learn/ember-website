import { highchartsOptions } from 'ember-website/utils/highcharts';
import { module, test } from 'qunit';

const customData = [
  {
    color: '#1E719B',
    data: [
      [1, 39],
      [2, 19],
      [3, 34],
      [4, 36],
      [5, 36],
      [6, 67],
      [7, 148],
      [8, 278],
      [9, 186],
      [10, 384],
    ],
    name: '2019',
    showInLegend: false,
  },
];

const defaultData = [
  {
    color: '#aaaaaa',
    data: 0,
    id: 'placeholder',
  },
];

const defaultChartOptions = {
  chart: {
    backgroundColor: 'transparent',
    type: 'column',
  },

  title: {
    text: '',
  },

  yAxis: {
    labels: {
      format: '{value} %',
    },

    title: {
      text: null,
    },
  },
};

module('Unit | Utility | highcharts', function () {
  module('highchartsOptions', function () {
    test('returns an object with valid Highcharts configuration options', function (assert) {
      const { credits, plotOptions, time } = highchartsOptions;

      assert.strictEqual(
        credits?.enabled,
        false,
        'We hide the credits for Highcharts.'
      );

      assert.strictEqual(
        plotOptions?.series?.shadow,
        false,
        'We do not apply shadow to the graph line.'
      );

      assert.ok('timezoneOffset' in time, 'We account for timezone offset.');
    });
  });
});
