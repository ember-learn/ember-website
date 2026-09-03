import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import ApplicationRoute from 'ember-website/routes/application';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ApplicationRoute;
}

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:application', ApplicationRoute);

    this.route = this.owner.lookup('route:application') as ApplicationRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
