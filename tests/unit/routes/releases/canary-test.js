import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | releases/canary', function (hooks) {
  setupTest(hooks);

  test('The model hook returns the canary projects', async function (assert) {
    const route = this.owner.lookup('route:releases/canary');
    const model = await route.model();

    assert.strictEqual(
      model.ember?.id,
      'ember/canary',
      'We found the Ember canary project.'
    );

    assert.strictEqual(
      model.emberData?.id,
      'emberData/canary',
      'We found the Ember Data canary project.'
    );

    assert.ok(
      model.canaryInfo?.version,
      'We found the metadata for canary project.'
    );
  });
});
