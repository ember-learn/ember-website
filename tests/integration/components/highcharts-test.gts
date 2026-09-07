import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupRenderingTest } from 'ember-qunit';
import Highcharts from 'ember-website/components/highcharts';
import { VerticalBarChart } from 'ember-website/utils/highcharts';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module('Integration | Component | highcharts', function (hooks) {
  setupRenderingTest(hooks);

  test('The component renders an svg chart', async function (assert) {
    const chart = new VerticalBarChart({
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

    await render(<template><Highcharts @chart={{chart}} /></template>);

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-chart]')
      .hasAria('label', 'Rank your web skills. Highcharts interactive chart.');

    assert
      .dom('[data-test-chart] svg')
      .exists({ count: 1 }, 'We see an svg element.');

    await a11yAudit();
  });
});
