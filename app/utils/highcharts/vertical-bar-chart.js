/*
  https://api.highcharts.com/highcharts/plotOptions.column
*/
export default class VerticalBarChart {
  get highchartsOptions() {
    return {
      data: [],

      options: {},
    };
  }
}

export function createSeries(rawData = []) {
  return rawData;
}
