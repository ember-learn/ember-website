import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | survey/2018', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:survey/2018');

    assert.ok(controller);
  });
});
