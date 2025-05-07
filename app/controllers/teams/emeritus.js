import Controller from '@ember/controller';
import { cached } from '@glimmer/tracking';

const inTeam = (team) => (teamMember) =>
  (teamMember.teams ?? []).includes(team);

export default class TeamsEmeritusController extends Controller {
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
}
