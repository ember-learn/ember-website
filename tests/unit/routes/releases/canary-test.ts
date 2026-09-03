import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import ReleasesCanaryRoute from 'ember-website/routes/releases/canary';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesCanaryRoute;
}

module('Unit | Route | releases/canary', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:releases/canary', ReleasesCanaryRoute);

    this.route = this.owner.lookup(
      'route:releases/canary',
    ) as ReleasesCanaryRoute;
  });

  test('The model hook returns the canary projects', async function (this: TestContext, assert) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const model = await this.route.model();

    assert.strictEqual(
      model.ember.id,
      'ember/canary',
      'We found the Ember canary project.',
    );

    assert.strictEqual(
      model.emberData.id,
      'emberData/canary',
      'We found the Ember Data canary project.',
    );

    assert.ok(
      model.canaryInfo.version,
      'We found the metadata for canary project.',
    );
  });
});
