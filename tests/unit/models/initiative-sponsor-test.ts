import type InitiativeSponsor from 'ember-website/models/initiative-sponsor';
import { setupTest } from 'ember-website/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | initiative-sponsor', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<InitiativeSponsor>(
      'initiative-sponsor',
      {},
    );

    assert.ok(model);
  });
});
