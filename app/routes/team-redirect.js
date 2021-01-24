import Route from '@ember/routing/route';

export default class TeamRedirectRoute extends Route {
  redirect() {
    this.transitionTo('teams');
  }
}
