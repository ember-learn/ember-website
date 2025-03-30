import { registerDestructor } from '@ember/destroyable';
import merge from 'deepmerge';
import Modifier from 'ember-modifier';

const optionsForAllCharts = {
  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      animation: false,
    },
  },

  time: {
    timezoneOffset: new Date().getTimezoneOffset(),
  },
};

export default class DrawChartModifier extends Modifier {
  highcharts;

  async modify(element, [chart]) {
    if (!chart) {
      return;
    }

    await this.initializeHighcharts();

    this.drawChart({ chart, element });

    registerDestructor(this, this.destroyChart.bind(this));
  }

  async initializeHighcharts() {
    if (this.highcharts) {
      return;
    }

    const { default: highcharts } = await import('highcharts');
    const { default: highchartsAccessibilty } = await import(
      'highcharts/modules/accessibility'
    );

    highchartsAccessibilty(highcharts);

    this.highcharts = highcharts;
    this.highcharts.setOptions(optionsForAllCharts);
  }

  drawChart({ chart, element }) {
    element.removeAttribute('data-render-state', 'settled');

    const chartOptions = merge(
      {
        chart: {
          events: {
            render: () => {
              element.setAttribute('data-render-state', 'settled');
            },
          },
        },
      },
      chart.highchartsOptions
    );

    this.chartInstance = this.highcharts.chart(element, chartOptions);
  }

  destroyChart() {
    this.chartInstance.destroy();
  }
}
