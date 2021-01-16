import Controller from '@ember/controller';
/* eslint-disable-next-line ember/no-computed-properties-in-native-classes */
import { sort } from '@ember/object/computed';

function inTeam(team) {
  return (teamMember) => (teamMember.teams ?? []).includes(team);
}

export default class TeamController extends Controller {
  sortingKeys = ['last', 'first'];

  @sort('model', 'sortingKeys') sortedModel;

  get alumniTeamMembers() {
    return this.sortedModel.filter(inTeam('alumni'));
  }

  get coreCLITeamMembers() {
    return this.sortedModel.filter(inTeam('cli'));
  }

  get coreTeamMembers() {
    return this.sortedModel.filter(inTeam('corejs'));
  }

  get dataTeamMembers() {
    return this.sortedModel.filter(inTeam('data'));
  }

  get learningTeamMembers() {
    return this.sortedModel.filter(inTeam('learning'));
  }

  get steeringCommitteeMembers() {
    return this.sortedModel.filter(inTeam('steering'));
  }
}
