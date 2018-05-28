import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tomster/payment-sent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tomster/payment-sent');
    assert.ok(route);
  });
});
