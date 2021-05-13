import AreaSplineChart from 'ember-website/utils/highcharts/area-spline-chart';
import HorizontalBarChart from 'ember-website/utils/highcharts/horizontal-bar-chart';
import PieChart from 'ember-website/utils/highcharts/pie-chart';
import SplineChart from 'ember-website/utils/highcharts/spline-chart';
import VerticalBarChart from 'ember-website/utils/highcharts/vertical-bar-chart';

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
  highchartsOptions,
  AreaSplineChart,
  HorizontalBarChart,
  PieChart,
  SplineChart,
  VerticalBarChart,
};
