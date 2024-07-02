import Controller from '@ember/controller';
import { cached } from '@glimmer/tracking';

const inTeam = (team) => (teamMember) =>
  (teamMember.teams ?? []).includes(team);

export default class TeamsController extends Controller {
  @cached
  get sortedTeamMembers() {
    const teamMembers = this.model?.slice() ?? [];

    return teamMembers.sort((teamMember1, teamMember2) => {
      return teamMember1.added - teamMember2.added;
    });
  }

  get alumniTeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('alumni'));
  }

  get coreToolingTeamMembers() {
    return this.sortedTeamMembers.filter(inTeam('tooling'));
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

  get steeringCommitteeMembers() {
    return this.sortedTeamMembers.filter(inTeam('steering'));
  }
}
