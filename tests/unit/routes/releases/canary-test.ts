import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type Project from 'ember-website/models/project';
import ReleasesCanaryRoute from 'ember-website/routes/releases/canary';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesCanaryRoute;
}

module('Unit | Route | releases/canary', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext, assert) {
    this.owner.register(
      'route:releases/canary',
      class extends ReleasesCanaryRoute {
        modelFor(route: string): Pick<Project, 'id'>[] {
          assert.step(`modelFor, ${route}`);

          return [{ id: 'ember/canary' }, { id: 'emberData/canary' }];
        }
      },
    );

    this.route = this.owner.lookup(
      'route:releases/canary',
    ) as ReleasesCanaryRoute;
  });

  test('The model hook returns the canary projects', function (this: TestContext, assert) {
    const model = this.route.model();

    assert.strictEqual(model.ember.id, 'ember/canary');
    assert.strictEqual(model.emberData.id, 'emberData/canary');

    assert.verifySteps(['modelFor, releases']);
  });
});
