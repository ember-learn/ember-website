import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:application');

    assert.ok(controller);
  });
});
