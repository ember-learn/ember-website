import { assign } from '@ember/polyfills';
import merge from 'deepmerge';

function createChartOptions({
  chartOptions = {},
  data = [{ color: '#aaaaaa', data: 0, id: 'placeholder' }],
  theme = {},
} = {}) {
  const themePlusChartOptions = merge(theme, chartOptions);

  return assign({ series: data }, themePlusChartOptions);
}

const highchartsOptions = {
  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      shadow: false,
    },
  },

  time: {
    timezoneOffset: new Date().getTimezoneOffset(),
  },
};

export { createChartOptions, highchartsOptions };
