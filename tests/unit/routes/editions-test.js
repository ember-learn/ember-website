import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:editions');
    assert.ok(route);
  });
});
