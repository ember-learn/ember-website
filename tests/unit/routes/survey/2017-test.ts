import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | survey/2017', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:survey/2017');

    assert.ok(route);
  });
});
