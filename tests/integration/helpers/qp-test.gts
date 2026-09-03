import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import qp from 'ember-website/helpers/qp';
import { module, test } from 'qunit';

module('Integration | Helper | qp', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    const key = 'uwu';

    await render(<template>{{if (qp key) "true" "false"}}</template>);

    assert.dom().hasText('false');
  });
});
