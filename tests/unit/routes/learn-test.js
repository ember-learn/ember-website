import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import showcases from 'ember-website/mirage/data/showcases';
import { module, test } from 'qunit';

module('Unit | Route | learn', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ showcases });
  });

  test('The model hook returns all showcase projects', async function (assert) {
    const route = this.owner.lookup('route:learn');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      showcases.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
