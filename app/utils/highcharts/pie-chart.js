/*
  https://api.highcharts.com/highcharts/plotOptions.pie
*/
export default class PieChart {
  constructor({ chart, rawData }) {
    this.chart = chart;
    this.series = createSeries(rawData);
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
}

export function createSeries(rawData = []) {
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
