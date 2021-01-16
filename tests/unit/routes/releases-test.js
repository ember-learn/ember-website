import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | releases', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:releases');

    assert.ok(route);
  });
});
