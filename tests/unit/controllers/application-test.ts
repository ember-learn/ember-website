import { setupTest } from 'ember-qunit';
import type ApplicationController from 'ember-website/controllers/application';
import { module, test } from 'qunit';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const controller = this.owner.lookup(
      'controller:application',
    ) as ApplicationController;

    assert.ok(controller);
  });
});
