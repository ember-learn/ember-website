import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import TeamRedirectRoute from 'ember-website/routes/team-redirect';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: TeamRedirectRoute;
}

module('Unit | Route | team-redirect', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:team-redirect', TeamRedirectRoute);

    this.route = this.owner.lookup('route:team-redirect') as TeamRedirectRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
