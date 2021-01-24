import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import projects from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Integration | Component | releases/how-to-install', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.db.loadData({ projects });

    const store = this.owner.lookup('service:store');

    this.projects = await store.findAll('project');
  });

  test('We can display instructions (non-canary release)', async function (assert) {
    this.project = this.projects.find(({ id }) => id === 'emberData/release');

    await render(hbs`
      <Releases::HowToInstall
        @project={{this.project}}
      />
    `);

    assert
      .dom('[data-test-field="Name"]')
      .hasText('Ember Data', 'We see the correct name.');

    assert
      .dom('[data-test-terminal-code]')
      .hasText(
        [
          '# Install Ember Data 3.24.0:',
          'npm install --save-dev ember-data@~3.24.0',
        ].join(' '),
        'We see the correct code.'
      );

    assert
      .dom('[data-test-field="More Information"]')
      .hasText(
        'Read the changelog for Ember Data 3.24.0.',
        'We see the correct description for more information.'
      );

    assert
      .dom('[data-test-link="Changelog"]')
      .hasAttribute(
        'href',
        'https://github.com/emberjs/data/blob/v3.24.0/CHANGELOG.md',
        'We see the correct URL for the changelog.'
      );
  });

  test('We can display instructions (canary release)', async function (assert) {
    this.project = this.projects.find(({ id }) => id === 'ember/canary');

    await render(hbs`
      <Releases::HowToInstall
        @project={{this.project}}
      >
        <TerminalCode>
          # Install the latest Ember canary:
          <br>
          npm install --save-dev https://s3.amazonaws.com/builds.emberjs.com/...
        </TerminalCode>
      </Releases::HowToInstall>
    `);

    assert
      .dom('[data-test-field="Name"]')
      .hasText('Ember', 'We see the correct name.');

    assert
      .dom('[data-test-terminal-code]')
      .hasText(
        [
          '# Install the latest Ember canary:',
          'npm install --save-dev https://s3.amazonaws.com/builds.emberjs.com/...',
        ].join(' '),
        'We see the correct code.'
      );

    assert
      .dom('[data-test-field="More Information"]')
      .doesNotExist('We should not see more information.');

    assert
      .dom('[data-test-link="Changelog"]')
      .doesNotExist('We should not see the link to the changelog.');
  });
});
