import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2021Route from 'ember-website/routes/survey/2021';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2021Route;
}

module('Unit | Route | survey/2021', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2021', Survey2021Route);

    this.route = this.owner.lookup('route:survey/2021') as Survey2021Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
