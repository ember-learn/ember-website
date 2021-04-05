/*
 https://api.highcharts.com/highcharts/plotOptions.spline
*/
export default class SplineChart {
  //   constructor({ chart, rawData }) {
  //     this.chart = chart;
  //     this.series = createSeries(rawData);
  //   }

  get highchartsOptions() {
    // const { chart, series } = this;

    return {
      data: [],

      options: {
        chart: {
          type: 'spline',
        },

        subtitle: {
          text: 'TODO: Allow subtitle',
        },

        title: {
          text: 'TODO: Allow title',
        },

        tooltip: {
          crosshairs: true,
          formatter: 'TODO',
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
          /* TODO */
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
      year: label,
    });
  });

  return data;
}
