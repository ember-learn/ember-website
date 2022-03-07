import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SurveyIndexRoute extends Route {
  @service router;

  redirect(model, transition) {
    if (transition.to.localName === 'index') {
      this.router.transitionTo('survey.2022');
    }
  }
}
