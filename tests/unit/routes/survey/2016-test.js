import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | survey/2016', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:survey/2016');
    assert.ok(route);
  });
});
