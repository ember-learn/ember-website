import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
  model() {
    return this.store.findAll('team-member');
  }
}
