import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mascots/commission', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mascots/commission');
    assert.ok(route);
  });
});
