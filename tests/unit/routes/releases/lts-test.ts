import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import ReleasesLtsRoute from 'ember-website/routes/releases/lts';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesLtsRoute;
}

module('Unit | Route | releases/lts', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:releases/lts', ReleasesLtsRoute);

    this.route = this.owner.lookup('route:releases/lts') as ReleasesLtsRoute;
  });

  test('The model hook returns the Ember LTS project', async function (this: TestContext, assert) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const model = await this.route.model();

    assert.strictEqual(
      model.ember.id,
      'ember/lts',
      'We found the Ember LTS project.',
    );

    assert.strictEqual(
      model.emberData.id,
      'emberData/lts',
      'We found the Ember Data LTS project.',
    );
  });
});
