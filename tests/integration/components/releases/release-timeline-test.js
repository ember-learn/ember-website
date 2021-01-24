import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Integration | Component | releases/release-timeline', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.db.loadData({ projects });

    const store = this.owner.lookup('service:store');

    this.projects = await store.findAll('project');
    this.emberBetaProject = this.projects.find(({ id }) => id === 'ember/beta');
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <Releases::ReleaseTimeline
        @emberBetaProject={{this.emberBetaProject}}
      />
    `);

    assert.ok(true);
  });
});
