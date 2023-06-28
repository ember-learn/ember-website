import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | releases/beta', function (hooks) {
  setupTest(hooks);

  test('The model hook returns the beta projects', async function (assert) {
    const route = this.owner.lookup('route:releases/beta');
    const model = await route.model();

    assert.strictEqual(
      model.ember?.id,
      'ember/beta',
      'We found the Ember beta project.'
    );

    assert.strictEqual(
      model.emberData?.id,
      'emberData/beta',
      'We found the Ember Data beta project.'
    );
  });
});
