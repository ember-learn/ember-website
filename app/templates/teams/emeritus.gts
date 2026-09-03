import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { pageTitle } from 'ember-page-title';
import TeamsTeamMember from 'ember-website/components/teams/team/member';
import type TeamMember from 'ember-website/models/team-member';
import type TeamsRoute from 'ember-website/routes/teams';
import type { ModelFrom } from 'ember-website/utils/routes';
import { inTeam } from 'ember-website/utils/teams/in-team';

interface TeamsEmeritusSignature {
  Args: {
    model: ModelFrom<TeamsRoute>;
  };
}

export default class TeamsEmeritus extends Component<TeamsEmeritusSignature> {
  get alumniTeamMembers(): TeamMember[] {
    return this.teamMembers.filter(inTeam('alumni'));
  }

  @cached get teamMembers(): TeamMember[] {
    const teamMembers = this.args.model ?? [];

    return teamMembers.toSorted((teamMember1, teamMember2) => {
      // @ts-expect-error: Incorrect type
      return teamMember1.added - teamMember2.added;
    });
  }

  <template>
    {{pageTitle "Emeritus"}}

    <div class="container">
      <h1 class="text-center">Emeritus of Ember.js</h1>
      <section>
        <p class="text-center" data-test-field="Team Description">
          Serving as a member of the Core Team(s) of an open source project like
          Ember is a huge amount of work. These are the emeritus members of the
          Ember Core Teams, to whom we will always be grateful.
        </p>

        <div class="grid lg:grid-5">
          {{#each this.alumniTeamMembers as |member|}}
            <TeamsTeamMember @member={{member}} />
          {{/each}}
        </div>
      </section>
    </div>
  </template>
}
