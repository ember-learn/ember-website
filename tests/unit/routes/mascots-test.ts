import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import MascotsRoute from 'ember-website/routes/mascots';
import { setupTest } from 'ember-website/tests/helpers';

interface TestContext extends BaseTestContext {
  route: MascotsRoute;
}

module('Unit | Route | mascots', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:mascots', MascotsRoute);

    this.route = this.owner.lookup('route:mascots') as MascotsRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
