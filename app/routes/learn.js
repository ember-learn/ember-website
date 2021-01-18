import Route from '@ember/routing/route';

export default class LearnRoute extends Route {
  model() {
    return this.store.findAll('showcase');
  }
}
