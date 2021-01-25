import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CtaEmberCommunitySurveyComponent extends Component {
  @tracked showReminder = true;

  @action closeSurveyReminder() {
    this.showReminder = false;
  }
}
