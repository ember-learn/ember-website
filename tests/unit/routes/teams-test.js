import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import teamMembers from 'ember-website/mirage/data/team-members';
import { module, test } from 'qunit';

module('Unit | Route | teams', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ teamMembers });
  });

  test('The model hook returns all team members', async function (assert) {
    const route = this.owner.lookup('route:teams');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      teamMembers.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
