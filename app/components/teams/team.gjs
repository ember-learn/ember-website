import TeamsTeamMember from 'ember-website/components/teams/team/member';
import dasherize from 'ember-website/helpers/dasherize';

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
</template>
