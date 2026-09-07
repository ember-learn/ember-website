import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import ReleasesRoute from 'ember-website/routes/releases';
import { setupTest } from 'ember-website/tests/helpers';

interface TestContext extends BaseTestContext {
  route: ReleasesRoute;
}

module('Unit | Route | releases', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:releases', ReleasesRoute);

    this.route = this.owner.lookup('route:releases') as ReleasesRoute;
  });

  test('The model hook returns all projects', async function (this: TestContext, assert) {
    const model = await this.route.model();

    const modelIds = model.map(({ id }) => id).sort();

    assert.deepEqual(modelIds, [
      'ember/beta',
      'ember/canary',
      'ember/lts',
      'ember/release',
      'emberData/beta',
      'emberData/canary',
      'emberData/lts',
      'emberData/release',
    ]);
  });
});
