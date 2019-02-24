import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about/legal', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about/legal');
    assert.ok(route);
  });
});
