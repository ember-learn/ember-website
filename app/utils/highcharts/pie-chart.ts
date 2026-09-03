/*
  https://api.highcharts.com/highcharts/plotOptions.pie
*/
import { tracked } from '@glimmer/tracking';

export type Chart = {
  subtitle?: string;
  title: string;
};

export type RawData = {
  color: string;
  label: string;
  value: number;
}[];

type Series = [
  {
    colors: string[];
    data: {
      name: string;
      y: number;
    }[];
  },
];

export default class PieChart {
  @tracked chart: Chart;
  @tracked rawData?: RawData;

  constructor({ chart, rawData }: { chart: Chart; rawData: RawData }) {
    this.chart = chart;
    this.rawData = rawData;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get highchartsOptions() {
    const { chart, series } = this;

    return {
      chart: {
        backgroundColor: 'transparent',
        type: 'pie',
      },

      series,

      subtitle: {
        text: chart.subtitle,
      },

      title: {
        text: chart.title,
      },

      tooltip: {
        pointFormat: '{point.y:.1f}%',
      },
    };
  }

  get series(): Series {
    return createSeries(this.rawData);
  }
}

function createSeries(rawData: RawData = []): Series {
  const colors: string[] = [];
  const data: {
    name: string;
    y: number;
  }[] = [];

  const total = rawData.reduce((accumulator, datum) => {
    const { value } = datum;

    return accumulator + value;
  }, 0);

  rawData.forEach((datum) => {
    const { color, label, value } = datum;

    colors.push(color);

    data.push({
      name: label,
      y: 100 * (value / total),
    });
  });

  return [{ colors, data }];
}
