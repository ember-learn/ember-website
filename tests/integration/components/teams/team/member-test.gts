import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import TeamsTeamMember from 'ember-website/components/teams/team/member';
import type TeamMember from 'ember-website/models/team-member';
import { module, test } from 'qunit';

module('Integration | Component | teams/team/member', function (hooks) {
  setupRenderingTest(hooks);

  test('We can display the member', async function (assert) {
    const store = this.owner.lookup('service:store');

    const member = await store.findRecord<TeamMember>(
      'team-member',
      'ricardo-mendes',
    );

    await render(<template><TeamsTeamMember @member={{member}} /></template>);

    assert
      .dom('[data-test-field="Name"]')
      .hasText('Ricardo Mendes', 'We see the correct name.');

    assert
      .dom('[data-test-link="GitHub"]')
      .hasAttribute(
        'href',
        'https://github.com/locks',
        'We see the correct URL for GitHub.',
      );

    assert
      .dom('[data-test-link="Twitter"]')
      .hasAttribute(
        'href',
        'https://twitter.com/locks',
        'We see the correct URL for Twitter.',
      );
  });
});
