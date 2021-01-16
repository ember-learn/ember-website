import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | learn', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:learn');

    assert.ok(route);
  });
});
