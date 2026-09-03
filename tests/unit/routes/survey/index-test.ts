import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import SurveyIndexRoute from 'ember-website/routes/survey/index';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: SurveyIndexRoute;
}

module('Unit | Route | survey/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/index', SurveyIndexRoute);

    this.route = this.owner.lookup('route:survey/index') as SurveyIndexRoute;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
