import Route from '@ember/routing/route';

export default class SurveyRoute extends Route {
  redirect() {
    this.transitionTo('ember-community-survey-2021');
  }
}
