import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import TeamsTeam from 'ember-website/components/teams/team';
import { module, test } from 'qunit';

module('Integration | Component | teams/team', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    const store = this.owner.lookup('service:store');

    this.teamMembers = await store.findAll('team-member');
  });

  test('We can display the team', async function (assert) {
    const members = this.teamMembers.filter(({ teams }) => {
      return (teams ?? []).includes('steering');
    });

    await render(
      <template>
        <TeamsTeam
          @description="The Steering Committee is responsible for the overall governance of the Ember project."
          @members={{members}}
          @name="The Steering Committee"
        />
      </template>,
    );

    assert
      .dom('[data-test-field="Team Name"]')
      .hasText('The Steering Committee', 'We see the correct team name.');

    assert
      .dom('[data-test-field="Team Description"]')
      .hasText(
        'The Steering Committee is responsible for the overall governance of the Ember project.',
        'We see the correct team description.',
      );

    assert.dom('[data-test-member]').exists({ count: 6 });
  });
});
