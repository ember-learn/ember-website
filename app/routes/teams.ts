import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type TeamMember from 'ember-website/models/team-member';

type Model = TeamMember[];

export default class TeamsRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    return this.store.findAll<TeamMember>('team-member');
  }
}
