import { assign } from '@ember/polyfills';
import merge from 'deepmerge';

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

export { createChartOptions, highchartsOptions };
