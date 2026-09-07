import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2019Route from 'ember-website/routes/survey/2019';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2019Route;
}

module('Unit | Route | survey/2019', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2019', Survey2019Route);

    this.route = this.owner.lookup('route:survey/2019') as Survey2019Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
