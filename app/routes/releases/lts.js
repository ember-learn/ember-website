import Route from '@ember/routing/route';

export default class ReleasesLtsRoute extends Route {
  model() {
    return this.store.find('project', 'ember/lts');
  }
}
