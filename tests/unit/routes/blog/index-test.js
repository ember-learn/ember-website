import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | blog/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blog/index');
    assert.ok(route);
  });
});
