import Route from '@ember/routing/route';

export default class TeamRedirect extends Route {
  redirect() {
    this.transitionTo('team');
  }
}
