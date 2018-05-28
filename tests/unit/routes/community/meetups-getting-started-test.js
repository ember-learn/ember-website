import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | community/meetups-getting-started', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:community/meetups-getting-started');
    assert.ok(route);
  });
});
