import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class HighchartsComponent extends Component {
  @tracked isHighchartsImported = false;

  @action async importHighcharts() {
    try {
      const module = await import('highcharts');

      this.highcharts = module.default;
      this.isHighchartsImported = true;
    } catch (e) {
      console.error(e);
    }
  }
}
