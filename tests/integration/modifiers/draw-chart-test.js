import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Modifier | draw-chart', function (hooks) {
  setupRenderingTest(hooks);

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
});
