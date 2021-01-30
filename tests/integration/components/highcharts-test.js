import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module('Integration | Component | highcharts', function (hooks) {
  setupRenderingTest(hooks);

  test('We can dynamically import Highcharts', async function (assert) {
    await render(hbs`
      <Highcharts />
    `);

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-highcharts-container] svg')
      .exists({ count: 1 }, 'We see an svg element.');
  });
});
