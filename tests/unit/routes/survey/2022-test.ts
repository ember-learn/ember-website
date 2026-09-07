import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2022Route from 'ember-website/routes/survey/2022';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2022Route;
}

module('Unit | Route | survey/2022', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2022', Survey2022Route);

    this.route = this.owner.lookup('route:survey/2022') as Survey2022Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
