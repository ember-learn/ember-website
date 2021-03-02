/*
  https://api.highcharts.com/highcharts/plotOptions.areaspline
*/
export default class AreaSplineChart {
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
