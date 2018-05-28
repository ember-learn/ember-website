import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tomster/commission-sent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tomster/commission-sent');
    assert.ok(route);
  });
});
