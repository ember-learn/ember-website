import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module('Integration | Modifier | draw-chart', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.chart = {
      highchartsOptions: {},
    };
  });

  test('The modifier does not error when the chart argument is undefined', async function (assert) {
    await render(hbs`
      <div
        data-test-chart
        {{draw-chart}}
      >
      </div>
    `);

    assert
      .dom('[data-test-chart] svg')
      .doesNotExist('We should not see an svg element.');
  });

  test('The modifier inserts an svg element', async function (assert) {
    await render(hbs`
      <div
        data-test-chart
        {{draw-chart this.chart}}
      >
      </div>
    `);

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-chart] svg')
      .exists({ count: 1 }, 'We see an svg element.');
  });
});
