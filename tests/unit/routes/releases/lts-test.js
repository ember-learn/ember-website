import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Unit | Route | releases/lts', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ projects });
  });

  test('The model hook returns the Ember LTS project', async function (assert) {
    const route = this.owner.lookup('route:releases/lts');
    const model = await route.model();

    assert.strictEqual(
      model?.id,
      'ember/lts',
      'We found the Ember LTS project.'
    );
  });
});
