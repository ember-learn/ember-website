import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import drawChart from 'ember-website/modifiers/draw-chart';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module('Integration | Modifier | draw-chart', function (hooks) {
  setupRenderingTest(hooks);

  test('The modifier does not error when the chart argument is undefined', async function (assert) {
    await render(
      <template>
        <div data-test-chart {{drawChart}}>
        </div>
      </template>,
    );

    assert
      .dom('[data-test-chart] svg')
      .doesNotExist('We should not see an svg element.');
  });

  test('The modifier inserts an svg element', async function (assert) {
    const chart = {
      highchartsOptions: {},
    };

    await render(
      <template>
        <div data-test-chart {{drawChart chart}}>
        </div>
      </template>,
    );

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-chart] svg')
      .exists({ count: 1 }, 'We see an svg element.');
  });
});
