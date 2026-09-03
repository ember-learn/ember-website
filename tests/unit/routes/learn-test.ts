import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import LearnRoute from 'ember-website/routes/learn';
import { setupTest } from 'ember-website/tests/helpers';

interface TestContext extends BaseTestContext {
  route: LearnRoute;
}

module('Unit | Route | learn', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:learn', LearnRoute);

    this.route = this.owner.lookup('route:learn') as LearnRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
