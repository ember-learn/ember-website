import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2020Route from 'ember-website/routes/survey/2020';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2020Route;
}

module('Unit | Route | survey/2020', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2020', Survey2020Route);

    this.route = this.owner.lookup('route:survey/2020') as Survey2020Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
