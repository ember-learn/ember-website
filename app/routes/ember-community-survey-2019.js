import Route from '@ember/routing/route';

export default Route.extend({
  classNames: ['ember-community-survey'],

  model() {
    return this.store.findAll('survey-2019');
  }
});
