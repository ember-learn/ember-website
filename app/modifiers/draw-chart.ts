import { registerDestructor } from '@ember/destroyable';
import merge from 'deepmerge';
import type { PositionalArgs } from 'ember-modifier';
import Modifier from 'ember-modifier';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Highcharts = typeof import('highcharts');

type Chart = {
  highchartsOptions: Highcharts.ChartOptions;
};

interface DrawChartSignature {
  Args: {
    Named: {};
    Positional: [chart?: Chart];
  };
  Element: HTMLElement;
}

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

export default class DrawChartModifier extends Modifier<DrawChartSignature> {
  declare chartInstance: Highcharts.Chart;
  declare highcharts: Highcharts;

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async modify(
    element: HTMLElement,
    [chart]: PositionalArgs<DrawChartSignature>,
  ): Promise<void> {
    if (!chart) {
      return;
    }

    await this.initializeHighcharts();

    this.drawChart({ chart, element });

    registerDestructor(this, this.destroyChart.bind(this));
  }

  async initializeHighcharts(): Promise<void> {
    if (this.highcharts) {
      return;
    }

    const { default: highcharts } = await import('highcharts');
    const { default: highchartsAccessibilty } =
      await import('highcharts/modules/accessibility');

    highchartsAccessibilty(highcharts);

    this.highcharts = highcharts;
    this.highcharts.setOptions(optionsForAllCharts);
  }

  drawChart({ chart, element }: { chart: Chart; element: HTMLElement }): void {
    // @ts-expect-error: Incorrect type
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
      chart.highchartsOptions,
    );

    this.chartInstance = this.highcharts.chart(element, chartOptions);
  }

  destroyChart(): void {
    this.chartInstance.destroy();
  }
}
