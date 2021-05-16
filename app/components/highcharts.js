import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import merge from 'deepmerge';

const optionsForAllCharts = {
  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      animation: false,
      shadow: false,
    },
  },

  time: {
    timezoneOffset: new Date().getTimezoneOffset(),
  },
};

export default class HighchartsComponent extends Component {
  /*
    These 2 states help us figure out when it is okay to
    test the component in rendering and application tests.
  */
  @tracked isHighchartsImported = false;
  @tracked isChartDrawn = false;

  get chartOptions() {
    const { chart } = this.args;

    if (!chart) {
      return {};
    }

    return chart.highchartsOptions;
  }

  get isSettled() {
    return this.isHighchartsImported && this.isChartDrawn;
  }

  @action async importHighcharts() {
    try {
      const module = await import('highcharts');

      this.highcharts = module.default;
      this.highcharts.setOptions(optionsForAllCharts);

      this.isHighchartsImported = true;
    } catch (e) {
      console.error(e);
    }
  }

  @action drawChart(element) {
    this.isChartDrawn = false;

    const chartOptions = merge(this.chartOptions, {
      chart: {
        events: {
          render: () => {
            this.isChartDrawn = true;
          },
        },
      },
    });

    this.chart = this.highcharts.chart(element, chartOptions);
  }

  @action destroyChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
