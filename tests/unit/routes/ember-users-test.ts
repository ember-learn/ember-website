import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import EmberUsersRoute from 'ember-website/routes/ember-users';
import { setupTest } from 'ember-website/tests/helpers';

interface TestContext extends BaseTestContext {
  route: EmberUsersRoute;
}

module('Unit | Route | ember-users', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:ember-users', EmberUsersRoute);

    this.route = this.owner.lookup('route:ember-users') as EmberUsersRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
