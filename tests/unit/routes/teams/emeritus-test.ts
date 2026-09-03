import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | teams/emeritus', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:teams/emeritus');
    assert.ok(route);
  });
});
