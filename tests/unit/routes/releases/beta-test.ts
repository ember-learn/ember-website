import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type Project from 'ember-website/models/project';
import ReleasesBetaRoute from 'ember-website/routes/releases/beta';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesBetaRoute;
}

module('Unit | Route | releases/beta', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext, assert) {
    this.owner.register(
      'route:releases/beta',
      class extends ReleasesBetaRoute {
        modelFor(route: string): Pick<Project, 'id'>[] {
          assert.step(`modelFor, ${route}`);

          return [{ id: 'ember/beta' }, { id: 'emberData/beta' }];
        }
      },
    );

    this.route = this.owner.lookup('route:releases/beta') as ReleasesBetaRoute;
  });

  test('The model hook returns the beta projects', function (this: TestContext, assert) {
    const model = this.route.model();

    assert.strictEqual(model.ember.id, 'ember/beta');
    assert.strictEqual(model.emberData.id, 'emberData/beta');

    assert.verifySteps(['modelFor, releases']);
  });
});
