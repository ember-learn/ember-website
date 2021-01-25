import { find, render, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | highcharts', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Highcharts />
    `);

    await waitUntil(() => {
      const { renderState } = find('[data-test-highcharts-container]').dataset;
      return renderState === 'settled';
    });

    assert
      .dom('[data-test-highcharts-container]')
      .hasText(
        'Highcharts was imported. We can start drawing!',
        'We imported highcharts dynamically.'
      );
  });
});
