import Route from '@ember/routing/route';

export default class ReleasesRoute extends Route {
  model() {
    return this.store.findAll('project');
  }
}
