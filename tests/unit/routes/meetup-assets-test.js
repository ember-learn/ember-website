import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | meetup-assets', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:meetup-assets');
    assert.ok(route);
  });
});
