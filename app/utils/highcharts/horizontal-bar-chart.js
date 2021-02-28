/*
  https://api.highcharts.com/highcharts/plotOptions.bar
*/
export default class HorizontalBarChart {
  get highchartsOptions() {
    return {
      data: [],

      options: {
        chart: {
          type: 'bar',
        },

        subtitle: {
          text: 'TODO: Allow subtitle',
        },

        title: {
          text: 'TODO: Allow title',
        },

        tooltip: {
          enabled: true,
          valueSuffix: '%',
        },

        xAxis: {
          /* TODO */
        },

        yAxis: {
          /* TODO */
        },
      },
    };
  }
}
