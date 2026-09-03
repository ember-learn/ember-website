import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import SponsorsRoute from 'ember-website/routes/sponsors';
import { setupTest } from 'ember-website/tests/helpers';

interface TestContext extends BaseTestContext {
  route: SponsorsRoute;
}

module('Unit | Route | sponsors', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:sponsors', SponsorsRoute);

    this.route = this.owner.lookup('route:sponsors') as SponsorsRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
