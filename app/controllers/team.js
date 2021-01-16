import Controller from '@ember/controller';
/* eslint-disable-next-line ember/no-computed-properties-in-native-classes */
import { sort } from '@ember/object/computed';

function inTeam(team) {
  return (target, key) => {
    Object.defineProperty(target, key, {
      get() {
        return this.sortedModel.filter((member) => member.teams.includes(team));
      },
    });
  };
}

export default class TeamController extends Controller {
  sortingKeys = ['last', 'first'];

  @sort('model', 'sortingKeys') sortedModel;
  @inTeam('alumni') alumniTeamMembers;
  @inTeam('cli') coreCLITeamMembers;
  @inTeam('corejs') coreTeamMembers;
  @inTeam('data') dataTeamMembers;
  @inTeam('learning') learningTeamMembers;
  @inTeam('steering') steeringCommitteeMembers;
}
