import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module(
  'Integration | Component | releases/release-timeline/stable',
  function (hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(async function () {
      this.server.db.loadData({ projects });

      const store = this.owner.lookup('service:store');

      this.projects = await store.findAll('project');
      this.emberBetaProject = this.projects.find(
        ({ id }) => id === 'ember/beta'
      );
    });

    test('We can display the current stable version', async function (assert) {
      await render(hbs`
        <Releases::ReleaseTimeline::Stable
          @eventDescription="Released {{format-date-time this.emberBetaProject.date}}"
          @eventName={{this.emberBetaProject.initialVersion}}
          @isReleased={{true}}
        />
      `);

      assert
        .dom('[data-test-field="Name"]')
        .hasText('3.24.0', 'We see the correct name.');

      assert
        .dom('[data-test-field="Description"]')
        .hasText('Released Dec 28', 'We see the correct description.');
    });

    test('We can display the next stable version', async function (assert) {
      await render(hbs`
        <Releases::ReleaseTimeline::Stable
          @eventDescription="Coming the week of {{format-date-time this.emberBetaProject.cycleEstimatedFinishDate}}"
          @eventName={{this.emberBetaProject.finalVersion}}
          @isReleased={{false}}
        />
      `);

      assert
        .dom('[data-test-field="Name"]')
        .hasText('3.25.0', 'We see the correct name.');

      assert
        .dom('[data-test-field="Description"]')
        .hasText('Coming the week of Feb 8', 'We see the correct description.');
    });
  }
);
