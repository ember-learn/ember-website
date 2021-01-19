import Route from '@ember/routing/route';

export default class MascotsRoute extends Route {
  model() {
    return this.store.findAll('tomster');
  }
}
