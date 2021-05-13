/*
  https://api.highcharts.com/highcharts/plotOptions.bar
*/
export default class HorizontalBarChart {
  constructor({ chart, rawData }) {
    this.chart = chart;
    this.series = createSeries(rawData);
  }

  get highchartsOptions() {
    const { chart, series } = this;

    return {
      chart: {
        backgroundColor: 'transparent',
        type: 'bar',
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
}

export function createSeries(rawData = []) {
  const data = [];

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
