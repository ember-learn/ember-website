import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | mascots', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:mascots');

    assert.ok(route);
  });
});
