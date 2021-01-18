import Route from '@ember/routing/route';

export default class TeamRoute extends Route {
  model() {
    return this.store.findAll('team-member');
  }
}
