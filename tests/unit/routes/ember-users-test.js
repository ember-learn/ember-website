import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import users from 'ember-website/mirage/data/users';
import { module, test } from 'qunit';

module('Unit | Route | ember-users', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ users });
  });

  test('The model hook returns all users of Ember.js', async function (assert) {
    const route = this.owner.lookup('route:ember-users');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      users.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
