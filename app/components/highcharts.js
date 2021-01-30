import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createChartOptions,
  highchartsOptions,
} from 'ember-website/utils/highcharts';

export default class HighchartsComponent extends Component {
  @tracked isHighchartsImported = false;

  get chartOptions() {
    const { chartOptions, data, theme } = this.args;

    return createChartOptions({ chartOptions, data, theme });
  }

  @action async importHighcharts() {
    try {
      const module = await import('highcharts');

      this.highcharts = module.default;
      this.highcharts.setOptions(highchartsOptions);

      this.isHighchartsImported = true;
    } catch (e) {
      console.error(e);
    }
  }

  @action drawChart(element) {
    this.chart = this.highcharts.chart(element, this.chartOptions);
  }

  @action destroyChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
