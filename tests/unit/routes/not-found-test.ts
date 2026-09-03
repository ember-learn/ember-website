import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import NotFoundRoute from 'ember-website/routes/not-found';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: NotFoundRoute;
}

module('Unit | Route | not-found', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:not-found', NotFoundRoute);

    this.route = this.owner.lookup('route:not-found') as NotFoundRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
