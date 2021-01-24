import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | ember-users', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:ember-users');

    assert.ok(controller);
  });
});
