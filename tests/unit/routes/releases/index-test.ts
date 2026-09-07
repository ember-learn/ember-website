import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import ReleasesIndexRoute from 'ember-website/routes/releases/index';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesIndexRoute;
}

module('Unit | Route | releases/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:releases/index', ReleasesIndexRoute);

    this.route = this.owner.lookup(
      'route:releases/index',
    ) as ReleasesIndexRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
