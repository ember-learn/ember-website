import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import teamMembers from 'ember-website/mirage/data/team-members';
import { module, test } from 'qunit';

module('Integration | Component | teams/team', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.db.loadData({ teamMembers });

    const store = this.owner.lookup('service:store');

    this.teamMembers = await store.findAll('team-member');
  });

  test('We can display the team', async function (assert) {
    this.members = this.teamMembers.filter(({ teams }) => {
      return (teams ?? []).includes('steering');
    });

    await render(hbs`
      <Teams::Team
        @description="The Steering Committee is responsible for the overall governance of the Ember project."
        @members={{this.members}}
        @name="The Steering Committee"
      />
    `);

    assert
      .dom('[data-test-field="Team Name"]')
      .hasText('The Steering Committee', 'We see the correct team name.');

    assert
      .dom('[data-test-field="Team Description"]')
      .hasText(
        'The Steering Committee is responsible for the overall governance of the Ember project.',
        'We see the correct team description.'
      );

    assert
      .dom('[data-test-member]')
      .exists({ count: 5 }, 'We see 5 team members.');
  });
});
