import Route from '@ember/routing/route';

export default class SponsorsRoute extends Route {
  model() {
    return this.store.findAll('sponsor');
  }
}
