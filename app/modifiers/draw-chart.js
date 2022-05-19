import { registerDestructor } from '@ember/destroyable';
import merge from 'deepmerge';
import Modifier from 'ember-modifier';
import Highcharts from 'highcharts';
import highchartsAccessibilty from 'highcharts/modules/accessibility';

const optionsForAllCharts = {};

export default class DrawChartModifier extends Modifier {
  constructor(owner, args) {
    super(owner, args);

    this.initializeHighcharts();
  }

  modify(element, [chart]) {
    if (!chart) {
      return;
    }

    this.drawChart({ chart, element });

    registerDestructor(this, this.destroyChart.bind(this));
  }

  initializeHighcharts() {
    highchartsAccessibilty(Highcharts);

    this.highcharts = Highcharts;
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
