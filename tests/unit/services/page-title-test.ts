import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Service | page-title', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:page-title');

    assert.ok(service);
  });
});
