import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import meetups from 'ember-website/mirage/data/meetups';
import { module, test } from 'qunit';

module('Unit | Route | community/meetups/index', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ meetups });
  });

  test('The model hook returns all Meetups', async function (assert) {
    const route = this.owner.lookup('route:community/meetups/index');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      meetups.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
