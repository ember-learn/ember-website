import HorizontalBarChart from 'ember-website/utils/highcharts/horizontal-bar-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/horizontal-bar-chart', function () {
  module('HorizontalBarChart', function () {
    test('can be instantiated', function (assert) {
      const barChart = new HorizontalBarChart();

      assert.ok(barChart, 'We can create an instance of HorizontalBarChart.');
    });

    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new HorizontalBarChart().highchartsOptions;

      assert.deepEqual(
        options,
        {
          chart: {
            type: 'bar',
          },

          subtitle: {
            text: 'TODO: Allow subtitle',
          },

          title: {
            text: 'TODO: Allow title',
          },

          tooltip: {
            enabled: true,
            valueSuffix: '%',
          },

          xAxis: {},

          yAxis: {},
        },
        'We get the correct value.'
      );
    });
  });
});
