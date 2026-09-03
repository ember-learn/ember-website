import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';

export default class TeamRedirectRoute extends Route {
  @service declare router: Services['router'];

  redirect(): void {
    this.router.transitionTo('teams');
  }
}
