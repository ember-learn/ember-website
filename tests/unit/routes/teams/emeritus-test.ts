import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import TeamsEmeritusRoute from 'ember-website/routes/teams/emeritus';
import { setupTest } from 'ember-qunit';

interface TestContext extends BaseTestContext {
  route: TeamsEmeritusRoute;
}

module('Unit | Route | teams/emeritus', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:teams/emeritus', TeamsEmeritusRoute);

    this.route = this.owner.lookup(
      'route:teams/emeritus',
    ) as TeamsEmeritusRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
