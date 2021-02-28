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
      data: series,

      options: {
        chart: {
          type: 'bar',
        },

        legend: {
          align: 'right',
          backgroundColor: '#FFFFFF',
          borderRadius: 2,
          borderWidth: 1,
          layout: 'vertical',
          shadow: true,
          verticalAlign: 'bottom',
          x: 0,
          y: -48,
        },

        subtitle: {
          text: chart.subtitle,
        },

        title: {
          text: chart.title,
        },

        tooltip: {
          enabled: true,
          pointFormat: '{series.name}: {point.y:.1f}%',
        },

        xAxis: {
          categories: chart.categories,
          type: 'category',
        },

        yAxis: {
          min: 0,
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
