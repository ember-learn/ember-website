import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | not-found', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:not-found');

    assert.ok(route);
  });
});
