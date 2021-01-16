import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Unit | Route | releases/beta', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ projects });
  });

  test('The model hook returns the beta projects', async function (assert) {
    const route = this.owner.lookup('route:releases/beta');
    const model = await route.model();

    assert.strictEqual(
      model.ember?.id,
      'ember/beta',
      'We found the Ember beta project.'
    );

    assert.strictEqual(
      model.emberData?.id,
      'emberData/beta',
      'We found the Ember Data beta project.'
    );
  });
});
