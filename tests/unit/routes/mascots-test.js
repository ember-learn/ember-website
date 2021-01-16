import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import tomsters from 'ember-website/mirage/data/tomsters';
import { module, test } from 'qunit';

module('Unit | Route | mascots', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ tomsters });
  });

  test('The model hook returns all mascots', async function (assert) {
    const route = this.owner.lookup('route:mascots');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      tomsters.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
