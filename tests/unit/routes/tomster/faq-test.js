import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tomster/faq', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tomster/faq');
    assert.ok(route);
  });
});
