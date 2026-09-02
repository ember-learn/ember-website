import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberEcosystem from 'ember-website/components/index/ember-ecosystem';
import { module, test } from 'qunit';

module('Integration | Component | index/ember-ecosystem', function (hooks) {
  setupRenderingTest(hooks);

  test('We see images of the Ember ecosystem', async function (assert) {
    await render(<template><IndexEmberEcosystem /></template>);

    assert.dom('[data-test-image]').exists({ count: 6 }, 'We see 6 images.');
  });
});
