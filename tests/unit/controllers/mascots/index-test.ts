import { setupTest } from 'ember-qunit';
import type MascotsIndexController from 'ember-website/controllers/mascots/index';
import { module, test } from 'qunit';

module('Unit | Controller | mascots/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const controller = this.owner.lookup(
      'controller:mascots/index',
    ) as MascotsIndexController;

    assert.ok(controller);
  });
});
