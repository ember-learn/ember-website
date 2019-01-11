import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mascots/payment-sent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mascots/payment-sent');
    assert.ok(route);
  });
});
