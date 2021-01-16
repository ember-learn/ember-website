import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | community/meetups/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:community/meetups/index');

    assert.ok(route);
  });
});
