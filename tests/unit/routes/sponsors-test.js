import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import sponsors from 'ember-website/mirage/data/sponsors';
import { module, test } from 'qunit';

module('Unit | Route | sponsors', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ sponsors });
  });

  test('The model hook returns all sponsors', async function (assert) {
    const route = this.owner.lookup('route:sponsors');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      sponsors.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
