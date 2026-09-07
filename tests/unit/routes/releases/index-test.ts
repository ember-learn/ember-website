import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type Project from 'ember-website/models/project';
import ReleasesIndexRoute from 'ember-website/routes/releases/index';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesIndexRoute;
}

module('Unit | Route | releases/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext, assert) {
    this.owner.register(
      'route:releases/index',
      class extends ReleasesIndexRoute {
        modelFor(route: string): Pick<Project, 'id'>[] {
          assert.step(`modelFor, ${route}`);

          return [{ id: 'ember/release' }, { id: 'emberData/release' }];
        }
      },
    );

    this.route = this.owner.lookup(
      'route:releases/index',
    ) as ReleasesIndexRoute;
  });

  test('The model hook returns the stable projects', function (this: TestContext, assert) {
    const model = this.route.model();

    assert.strictEqual(model.ember.id, 'ember/release');
    assert.strictEqual(model.emberData.id, 'emberData/release');

    assert.verifySteps(['modelFor, releases']);
  });
});
