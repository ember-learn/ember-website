import Route from '@ember/routing/route';

export default class CommunityMeetupsIndexRoute extends Route {
  model() {
    return this.store.findAll('meetup');
  }
}
