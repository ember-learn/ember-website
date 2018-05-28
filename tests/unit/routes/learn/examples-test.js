import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | learn/examples', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:learn/examples');
    assert.ok(route);
  });
});
