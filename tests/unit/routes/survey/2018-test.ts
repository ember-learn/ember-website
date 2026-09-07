import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2018Route from 'ember-website/routes/survey/2018';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2018Route;
}

module('Unit | Route | survey/2018', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2018', Survey2018Route);

    this.route = this.owner.lookup('route:survey/2018') as Survey2018Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
