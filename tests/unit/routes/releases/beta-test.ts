import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import ReleasesBetaRoute from 'ember-website/routes/releases/beta';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesBetaRoute;
}

module('Unit | Route | releases/beta', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:releases/beta', ReleasesBetaRoute);

    this.route = this.owner.lookup('route:releases/beta') as ReleasesBetaRoute;
  });

  test('The model hook returns the beta projects', async function (this: TestContext, assert) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const model = await this.route.model();

    assert.strictEqual(
      model.ember.id,
      'ember/beta',
      'We found the Ember beta project.',
    );

    assert.strictEqual(
      model.emberData.id,
      'emberData/beta',
      'We found the Ember Data beta project.',
    );
  });
});
