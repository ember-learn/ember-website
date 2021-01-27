import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CtaEmberCommunitySurveyComponent extends Component {
  @service router;

  @tracked showReminder = true;

  get show() {
    return (
      this.router.currentRouteName !== this.args.surveyRoute &&
      this.showReminder
    );
  }

  @action closeSurveyReminder() {
    this.showReminder = false;
  }
}
