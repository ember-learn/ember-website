import Controller from '@ember/controller';
import { alias, filter } from '@ember/object/computed'
import { computed } from '@ember/object';

export default Controller.extend({
  teamMembers: alias('model'),

  alumniTeamMembers: computed('teamMembers', function() {
    return this._filteredList('alumni');
  }),

  coreCLITeamMembers: computed('teamMembers', function() {
    return this._filteredList('cli');
  }),

  coreTeamMembers: computed('teamMembers', function() {
    return this._filteredList('corejs');
  }),

  dataTeamMembers: computed('teamMembers', function() {
    return this._filteredList('data');
  }),

  learningTeamMembers: computed('teamMembers', function() {
    return this._filteredList('learning');
  }),

  steeringCommitteeMembers: filter('teamMembers', function(member) {
    return member.teams.includes('steering');
  }),

  _filteredList(filterCriteria) {
    return this.teamMembers.filter((member) => member.teams.includes(filterCriteria)).sort((a, b) => a.last > b.last);
  }
});
