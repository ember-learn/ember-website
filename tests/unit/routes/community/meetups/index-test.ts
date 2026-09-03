import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import CommunityMeetupsIndexRoute from 'ember-website/routes/community/meetups/index';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: CommunityMeetupsIndexRoute;
}

module('Unit | Route | community/meetups/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register(
      'route:community/meetups/index',
      CommunityMeetupsIndexRoute,
    );

    this.route = this.owner.lookup(
      'route:community/meetups/index',
    ) as CommunityMeetupsIndexRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
