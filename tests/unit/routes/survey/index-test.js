import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | survey/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:survey/index');

    assert.ok(route);
  });
});
