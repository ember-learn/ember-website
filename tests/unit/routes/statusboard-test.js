import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | statusboard', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:statusboard');

    assert.ok(route);
  });
});
