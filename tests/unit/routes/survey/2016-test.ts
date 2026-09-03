import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import Survey2016Route from 'ember-website/routes/survey/2016';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  route: Survey2016Route;
}

module('Unit | Route | survey/2016', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:survey/2016', Survey2016Route);

    this.route = this.owner.lookup('route:survey/2016') as Survey2016Route;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
