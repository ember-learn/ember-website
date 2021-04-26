import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import VerticalBarChart from 'ember-website/utils/highcharts/vertical-bar-chart';
import { module, test } from 'qunit';

module('Integration | Component | highcharts', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.chart = new VerticalBarChart({
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
    });
  });

  test('We can dynamically import Highcharts', async function (assert) {
    await render(hbs`
      <Highcharts
        @chart={{this.chart}}
      />
    `);

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-highcharts-container] svg')
      .exists({ count: 1 }, 'We see an svg element.');
  });
});
