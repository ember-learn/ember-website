import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | ember-users', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:ember-users');

    assert.ok(route);
  });
});
