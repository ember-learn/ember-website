import Controller from '@ember/controller';
/* eslint-disable-next-line ember/no-computed-properties-in-native-classes */
import { computed } from '@ember/object';

function inTeam(team) {
  return (teamMember) => (teamMember.teams ?? []).includes(team);
}

export default class TeamController extends Controller {
  @computed get sortedModel() {
    const teamMembers = (this.model ?? []).toArray();

    return teamMembers.sort((teamMember1, teamMember2) => {
      const surname1 = teamMember1.last ?? '';
      const surname2 = teamMember2.last ?? '';
      let comparisonResult = surname1.localeCompare(surname2);

      if (comparisonResult !== 0) {
        return comparisonResult;
      }

      const givenName1 = teamMember1.first ?? '';
      const givenName2 = teamMember2.first ?? '';
      comparisonResult = givenName1.localeCompare(givenName2);

      return comparisonResult;
    });
  }

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
