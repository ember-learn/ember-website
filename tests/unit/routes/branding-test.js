import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | branding', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:branding');
    assert.ok(route);
  });
});
