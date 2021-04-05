/*
 https://api.highcharts.com/highcharts/plotOptions.spline
*/
export default class SplineChart {
  constructor({ chart, rawData }) {
    this.chart = chart;
    this.series = createSeries(rawData);
  }

  get highchartsOptions() {
    const { chart, series } = this;

    return {
      data: series,

      options: {
        chart: {
          type: 'spline',
        },

        subtitle: {
          text: chart.subtitle,
        },

        title: {
          text: chart.title,
        },

        tooltip: {
          crosshairs: true,
          formatter: chart.tooltip,
          shared: true,
        },

        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
          },
        },

        xAxis: {
          categories: chart.categories,
          type: 'category',
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
