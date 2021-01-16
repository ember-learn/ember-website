import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Unit | Route | releases/canary', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.db.loadData({ projects });
  });

  test('The model hook returns the canary projects', async function (assert) {
    const route = this.owner.lookup('route:releases/canary');
    const model = await route.model();

    assert.strictEqual(
      model.ember?.id,
      'ember/canary',
      'We found the Ember canary project.'
    );

    assert.strictEqual(
      model.emberData?.id,
      'emberData/canary',
      'We found the Ember Data canary project.'
    );

    assert.strictEqual(
      model.canaryInfo?.version,
      '3.25.0-canary+635799d4',
      'We found the metadata for canary project.'
    );
  });
});
