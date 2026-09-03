import type { TOC } from '@ember/component/template-only';
import { dasherize } from '@ember/string';
import TeamsTeamMember from 'ember-website/components/teams/team/member';
import type TeamMember from 'ember-website/models/team-member';

interface TeamsTeamSignature {
  Args: {
    description?: string;
    members: TeamMember[];
    name: string;
  };
}

<template>
  <h2 class="text-center" data-test-field="Team Name" id={{dasherize @name}}>
    {{@name}}
  </h2>

  {{#if @description}}
    <p class="text-center" data-test-field="Team Description">
      {{@description}}
    </p>
  {{/if}}

  <div class="grid lg:grid-5">
    {{#each @members as |member|}}
      <TeamsTeamMember @member={{member}} />
    {{/each}}
  </div>
</template> satisfies TOC<TeamsTeamSignature>;
