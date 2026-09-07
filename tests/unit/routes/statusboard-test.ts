import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import StatusboardRoute from 'ember-website/routes/statusboard';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: StatusboardRoute;
}

module('Unit | Route | statusboard', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:statusboard', StatusboardRoute);

    this.route = this.owner.lookup('route:statusboard') as StatusboardRoute;
  });

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:statusboard');

    assert.ok(route);
  });
});
