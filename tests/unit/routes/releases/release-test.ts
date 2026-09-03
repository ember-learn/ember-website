import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import ReleasesReleaseRoute from 'ember-website/routes/releases/release';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesReleaseRoute;
}

module('Unit | Route | releases/release', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:releases/release', ReleasesReleaseRoute);

    this.route = this.owner.lookup(
      'route:releases/release',
    ) as ReleasesReleaseRoute;
  });

  test('The model hook returns the stable projects', async function (this: TestContext, assert) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const model = await this.route.model();

    assert.strictEqual(
      model.ember.id,
      'ember/release',
      'We found the Ember stable project.',
    );

    assert.strictEqual(
      model.emberData.id,
      'emberData/release',
      'We found the Ember Data stable project.',
    );
  });
});
