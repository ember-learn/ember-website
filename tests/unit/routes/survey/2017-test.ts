import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2017Route from 'ember-website/routes/survey/2017';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2017Route;
}

module('Unit | Route | survey/2017', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2017', Survey2017Route);

    this.route = this.owner.lookup('route:survey/2017') as Survey2017Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
