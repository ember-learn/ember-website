/*
  https://api.highcharts.com/highcharts/plotOptions.column
*/
export default class VerticalBarChart {
  get highchartsOptions() {
    return {
      data: [],

      options: {
        chart: {
          type: 'column',
        },

        subtitle: {
          text: 'TODO: Allow subtitle',
        },

        title: {
          text: 'TODO: Allow title',
        },

        tooltip: {
          pointFormat: '{series.name}: {point.y:.1f}%',
        },

        xAxis: {
          categories: [],
          type: 'category',
        },

        yAxis: {
          title: {
            text: 'Percent of responses',
          },
        },
      },
    };
  }
}

export function createSeries(rawData = []) {
  return rawData;
}
