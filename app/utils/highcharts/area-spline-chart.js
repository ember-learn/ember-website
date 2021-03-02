/*
  https://api.highcharts.com/highcharts/plotOptions.areaspline
*/
export default class AreaSplineChart {
  get highchartsOptions() {
    return {
      data: [],

      options: {
        chart: {
          type: 'areaspline',
        },

        subtitle: {
          text: 'TODO: Allow subtitle',
        },

        title: {
          text: 'TODO: Allow title',
        },

        tooltip: {
          pointFormat: '{point.y:.1f}%',
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
