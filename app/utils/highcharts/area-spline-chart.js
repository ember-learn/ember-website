/*
  https://api.highcharts.com/highcharts/plotOptions.areaspline
*/
export default class AreaSplineChart {
  constructor({ chart, rawData }) {
    this.chart = chart;
    this.series = createSeries(rawData);
  }

  get highchartsOptions() {
    const { chart, series } = this;

    return {
      chart: {
        backgroundColor: 'transparent',
        type: 'areaspline',
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
