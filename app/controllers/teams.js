import Controller from '@ember/controller';
import { cached } from '@glimmer/tracking';

const inTeam = (team) => (teamMember) =>
  (teamMember.teams ?? []).includes(team);

export default class TeamsController extends Controller {
  @cached
  get sortedTeamMembers() {
    const teamMembers = this.model?.slice() ?? [];

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
    return this.sortedTeamMembers.filter(inTeam('alumni'));
  }

  get coreCLITeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('cli'));
  }

  get coreTeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('corejs'));
  }

  get dataTeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('data'));
  }

  get learningTeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('learning'));
  }

  get typescriptTeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('typescript'));
  }

  get steeringCommitteeMembers() {
    return this.sortedTeamMembers.filter(inTeam('steering'));
  }
}
