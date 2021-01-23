import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | index/ember-ecosystem', function (hooks) {
  setupRenderingTest(hooks);

  test('We see images of the Ember ecosystem', async function (assert) {
    await render(hbs`
      <Index::EmberEcosystem />
    `);

    assert.dom('[data-test-image]').exists({ count: 6 }, 'We see 6 images.');
  });
});
