import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexGridDots from 'ember-website/components/index/grid-dots';
import { module, test } from 'qunit';

module('Integration | Component | index/grid-dots', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><IndexGridDots /></template>);

    assert.ok(true);
  });
});
