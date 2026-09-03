import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { pageTitle } from 'ember-page-title';
import TeamsTeam from 'ember-website/components/teams/team';
import type TeamMember from 'ember-website/models/team-member';
import type TeamsRoute from 'ember-website/routes/teams';
import type { ModelFrom } from 'ember-website/utils/routes';
import { inTeam } from 'ember-website/utils/teams/in-team';

interface TeamsIndexSignature {
  Args: {
    model: ModelFrom<TeamsRoute>;
  };
}

export default class TeamsIndex extends Component<TeamsIndexSignature> {
  get coreToolingTeamMembers(): TeamMember[] {
    return this.teamMembers.filter(inTeam('tooling'));
  }

  get coreTeamMembers(): TeamMember[] {
    return this.teamMembers.filter(inTeam('corejs'));
  }

  get dataTeamMembers(): TeamMember[] {
    return this.teamMembers.filter(inTeam('data'));
  }

  get learningTeamMembers(): TeamMember[] {
    return this.teamMembers.filter(inTeam('learning'));
  }

  get steeringCommitteeMembers(): TeamMember[] {
    return this.teamMembers.filter(inTeam('steering'));
  }

  @cached get teamMembers(): TeamMember[] {
    const teamMembers = this.args.model ?? [];

    return teamMembers.toSorted((teamMember1, teamMember2) => {
      // @ts-expect-error: Incorrect type
      return teamMember1.added - teamMember2.added;
    });
  }

  <template>
    {{pageTitle "Team"}}

    <div class="container">
      <h1 class="text-center">The Team Behind Ember</h1>

      <div class="mb-6">
        <p class="text-center">
          Ember is an Open Source project that relies on the tireless support of
          individual contributors. These are the teams that guide the
          development and instruction of Ember.js.
        </p>
      </div>

      <section class="mb-6">
        <TeamsTeam
          @description="The Steering Committee is responsible for the overall governance of the Ember project."
          @members={{this.steeringCommitteeMembers}}
          @name="The Steering Committee"
        />
      </section>

      <section class="mb-6">
        <TeamsTeam
          @members={{this.coreTeamMembers}}
          @name="The Ember.js Framework Core Team"
        />
      </section>

      <section class="mb-6">
        <TeamsTeam
          @description="The Ember Tooling core team is responsible for maintaining ember-cli, Embroider, Glint, Ember's TypeScript integration, and anything related to the Ember build system. The team also maintains many of the addons in the default blueprint as well as fastboot."
          @members={{this.coreToolingTeamMembers}}
          @name="The Ember Tooling Core Team"
        />
      </section>

      <section class="mb-6">
        <TeamsTeam
          @description="The Ember Data core team is responsible for the official data persistence library for Ember.js applications."
          @members={{this.dataTeamMembers}}
          @name="The Ember Data Core Team"
        />
      </section>

      <section class="mb-6">
        <TeamsTeam
          @description="The mission of the Ember Learning core team is to empower Ember users to learn, build and teach. This team is responsible for keeping the guides and API documentation updated, and manages the initiatives that support learning Ember."
          @members={{this.learningTeamMembers}}
          @name="The Ember Learning Core Team"
        />
      </section>

      <section class="mb-6">
        <h2 class="text-center">
          Emeritus
        </h2>
        <p class="text-center" data-test-field="Team Description">
          Serving as a member of the Core Team(s) of an open source project like
          Ember is a huge amount of work. These are the emeritus members of the
          Ember Core Teams, to whom we will always be grateful.
          <LinkTo @route="teams.emeritus">Click here to see all the emeritus
            members</LinkTo>.
        </p>
      </section>
    </div>
  </template>
}
