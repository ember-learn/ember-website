import Route from '@ember/routing/route';
import type Transition from '@ember/routing/transition';
import { type Registry as Services, service } from '@ember/service';

type Model = undefined;

export default class SurveyIndexRoute extends Route {
  @service declare router: Services['router'];

  redirect(model: Model, transition: Transition): void {
    if (transition.to?.localName === 'index') {
      this.router.transitionTo('survey.2024');
    }
  }
}
