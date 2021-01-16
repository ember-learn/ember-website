import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | ember-community-survey-2017', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup(
      'controller:ember-community-survey-2017'
    );

    assert.ok(controller);
  });
});
