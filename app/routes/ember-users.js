import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmberUsersRoute extends Route {
  @service store;

  //This returns a 404 - any insight would be useful

  // model() {
  //   return this.store.query('user', {
  //     filter: {
  //       inactive: false
  //     },
  //   });
  // }

  async model() {
    const users = await this.store.findAll('user');
    return users.filterBy('inactive', false);
  }
}
