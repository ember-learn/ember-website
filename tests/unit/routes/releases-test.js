import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Unit | Route | releases', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ projects });
  });

  test('The model hook returns all releases', async function (assert) {
    const route = this.owner.lookup('route:releases');
    const model = await route.model();

    // Create an intermediate data structure for assertion
    const output = model.map(({ id }) => id);

    assert.deepEqual(
      output,
      projects.map(({ id }) => id),
      'We get the correct output.'
    );
  });
});
