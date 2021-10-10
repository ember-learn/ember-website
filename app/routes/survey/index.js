import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SurveyIndexRoute extends Route {
  @service router;

  redirect(model, transition) {
    console.log(transition);
    const {
      to: { localName },
    } = transition;
    if (localName === 'index') {
      this.router.transitionTo('survey.2021');
    }
  }
}
