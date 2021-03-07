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
