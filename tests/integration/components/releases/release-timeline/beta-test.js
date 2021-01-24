import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module(
  'Integration | Component | releases/release-timeline/beta',
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

    test('We can display the current beta version', async function (assert) {
      await render(hbs`
        <Releases::ReleaseTimeline::Beta
          @emberBetaProject={{this.emberBetaProject}}
          @version={{1}}
        />
      `);

      assert
        .dom('[data-test-field="Name"]')
        .hasText('beta 1', 'We see the correct name.');

      assert
        .dom('[data-test-field="Description"]')
        .hasText('current', 'We see the correct description.');
    });

    test('We can display the next beta version', async function (assert) {
      await render(hbs`
        <Releases::ReleaseTimeline::Beta
          @emberBetaProject={{this.emberBetaProject}}
          @version={{2}}
        />
      `);

      assert
        .dom('[data-test-field="Name"]')
        .hasText('beta 2', 'We see the correct name.');

      assert
        .dom('[data-test-field="Description"]')
        .hasText('Feb 8', 'We see the correct description.');
    });

    test('We can display the 2nd next beta version', async function (assert) {
      await render(hbs`
        <Releases::ReleaseTimeline::Beta
          @emberBetaProject={{this.emberBetaProject}}
          @version={{3}}
        />
      `);

      assert
        .dom('[data-test-field="Name"]')
        .hasText('beta 3', 'We see the correct name.');

      assert
        .dom('[data-test-field="Description"]')
        .hasText('', 'We see the correct description.');
    });
  }
);
