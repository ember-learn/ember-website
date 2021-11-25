import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | survey/2018', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:survey/2018');

    assert.ok(route);
  });
});
