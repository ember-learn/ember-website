import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type Project from 'ember-website/models/project';
import ReleasesLtsRoute from 'ember-website/routes/releases/lts';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: ReleasesLtsRoute;
}

module('Unit | Route | releases/lts', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext, assert) {
    this.owner.register(
      'route:releases/lts',
      class extends ReleasesLtsRoute {
        modelFor(route: string): Pick<Project, 'id'>[] {
          assert.step(`modelFor, ${route}`);

          return [{ id: 'ember/lts' }, { id: 'emberData/lts' }];
        }
      },
    );

    this.route = this.owner.lookup('route:releases/lts') as ReleasesLtsRoute;
  });

  test('The model hook returns the Ember LTS project', function (this: TestContext, assert) {
    const model = this.route.model();

    assert.strictEqual(model.ember.id, 'ember/lts');
    assert.strictEqual(model.emberData.id, 'emberData/lts');

    assert.verifySteps(['modelFor, releases']);
  });
});
