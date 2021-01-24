import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import teamMembers from 'ember-website/mirage/data/team-members';
import { module, test } from 'qunit';

module('Integration | Component | teams/team/member', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.db.loadData({ teamMembers });

    const store = this.owner.lookup('service:store');

    this.teamMembers = await store.findAll('team-member');
  });

  test('We can display the member', async function (assert) {
    this.member = this.teamMembers.find(({ id }) => id === 'ricardo-mendes');

    await render(hbs`
      <Teams::Team::Member
        @member={{this.member}}
      />
    `);

    assert
      .dom('[data-test-field="Name"]')
      .hasText('Ricardo Mendes', 'We see the correct name.');

    assert
      .dom('[data-test-link="GitHub"]')
      .hasAttribute(
        'href',
        'https://github.com/locks',
        'We see the correct URL for GitHub.'
      );

    assert
      .dom('[data-test-link="Twitter"]')
      .hasAttribute(
        'href',
        'https://twitter.com/locks',
        'We see the correct URL for Twitter.'
      );
  });
});
