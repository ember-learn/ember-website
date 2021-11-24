import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Unit | Controller | releases/index', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    // Create data
    this.server.db.loadData({ projects });

    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('project');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:releases/index');
    this.controller.model = model;
  });

  test('We can find the Ember beta project', function (assert) {
    const { emberReleaseProject } = this.controller;

    assert.strictEqual(
      emberReleaseProject?.id,
      'ember/release',
      'We found the Ember release project.'
    );
  });
});
