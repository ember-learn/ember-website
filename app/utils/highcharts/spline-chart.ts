/*
  https://api.highcharts.com/highcharts/plotOptions.spline
*/
import { tracked } from '@glimmer/tracking';

export type Chart = {
  categories: string[];
  subtitle?: string;
  title: string;
};

export type RawData = {
  color: string;
  label: string;
  values: (number | null)[];
}[];

type Series = {
  color: string;
  data: (number | null)[];
  name: string;
}[];

export default class SplineChart {
  @tracked chart: Chart;
  @tracked rawData?: RawData;

  constructor({ chart, rawData }: { chart: Chart; rawData: RawData }) {
    this.chart = chart;
    this.rawData = rawData;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get highchartsOptions() {
    const { chart, isLegendEnabled, series } = this;

    return {
      chart: {
        backgroundColor: 'transparent',
        type: 'spline',
      },

      legend: {
        enabled: isLegendEnabled,
      },

      plotOptions: {
        series: {
          marker: {
            enabled: false,
          },
        },
      },

      series,

      subtitle: {
        text: chart.subtitle,
      },

      title: {
        text: chart.title,
      },

      tooltip: {
        pointFormat: '{series.name}: {point.y:.1f}%',
      },

      xAxis: {
        categories: chart.categories,
        type: 'category',
      },

      yAxis: {
        labels: {
          format: '{value} %',
        },
        min: 0,
        title: {
          text: 'Percent of responses',
        },
      },
    };
  }

  get isLegendEnabled(): boolean {
    const { series } = this;

    return series.length > 1;
  }

  get series(): Series {
    return createSeries(this.rawData);
  }
}

function createSeries(rawData: RawData = []): Series {
  const data: Series = [];

  rawData.forEach((datum) => {
    const { color, label, values } = datum;

    data.push({
      color,
      data: values,
      name: label,
    });
  });

  return data;
}
