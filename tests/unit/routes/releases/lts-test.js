import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | releases/lts', function (hooks) {
  setupTest(hooks);

  test('The model hook returns the Ember LTS project', async function (assert) {
    const route = this.owner.lookup('route:releases/lts');
    const { ember: model } = await route.model();

    assert.strictEqual(
      model?.id,
      'ember/lts',
      'We found the Ember LTS project.'
    );
  });
});
