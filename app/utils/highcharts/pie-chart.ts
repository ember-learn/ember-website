/*
  https://api.highcharts.com/highcharts/plotOptions.pie
*/
import { tracked } from '@glimmer/tracking';

export default class PieChart {
  @tracked chart;
  @tracked rawData;

  constructor({ chart, rawData }) {
    this.chart = chart;
    this.rawData = rawData;
  }

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

  get series() {
    return createSeries(this.rawData);
  }
}

function createSeries(rawData = []) {
  const colors = [];
  const data = [];

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
