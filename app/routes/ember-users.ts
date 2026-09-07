import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type User from 'ember-website/models/user';

type Model = User[];

export default class EmberUsersRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    return this.store.findAll<User>('user');
  }
}
