import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TeamRedirectRoute extends Route {
  @service router;

  redirect() {
    this.router.transitionTo('teams');
  }
}
