import Route from '@ember/routing/route';

export default class EmberUsersRoute extends Route {
  model() {
    return this.store.findAll('user');
  }
}
