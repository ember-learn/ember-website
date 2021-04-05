/*
 https://api.highcharts.com/highcharts/plotOptions.spline
*/
export default class SplineChart {
    constructor({chart, rawData}) {
        this.chart = chart;
        this.series = createSeries(rawData);
    }

    get highchartsOptions() {
        const { chart, series } = this;
        
        return {
            data: series,

            options: {},
        }
    }
}

export function createSeries(rawData = []) {
    return rawData;
}