import { assign } from '@ember/polyfills';
import merge from 'deepmerge';
import AreaSplineChart from 'ember-website/utils/highcharts/area-spline-chart';
import HorizontalBarChart from 'ember-website/utils/highcharts/horizontal-bar-chart';
import PieChart from 'ember-website/utils/highcharts/pie-chart';

const defaultChartOptions = {
  chart: {
    backgroundColor: 'transparent',
    type: 'column',
  },

  title: {
    text: '',
  },

  yAxis: {
    labels: {
      format: '{value} %',
    },

    title: {
      text: null,
    },
  },
};

function createChartOptions({
  chartOptions = {},
  data = [{ color: '#aaaaaa', data: 0, id: 'placeholder' }],
} = {}) {
  // Note, `merge(A, B)` means that B overrides A
  const combinedChartOptions = merge(defaultChartOptions, chartOptions);

  return assign({ series: data }, combinedChartOptions);
}

const highchartsOptions = {
  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      animation: false,
      shadow: false,
    },
  },

  time: {
    timezoneOffset: new Date().getTimezoneOffset(),
  },
};

export {
  createChartOptions,
  highchartsOptions,
  AreaSplineChart,
  HorizontalBarChart,
  PieChart,
};
