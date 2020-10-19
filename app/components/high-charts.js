import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { getOwner } from '@ember/application';
import { set, computed } from '@ember/object';
import { run } from '@ember/runloop';
import merge from 'deepmerge';

let localConfig = null;
let defaultOptions = {
  plotOptions: {
    series: {
      shadow: false
    }
  },

  global: {
    timezoneOffset: new Date().getTimezoneOffset()
  },

  credits: {
    enabled: false
  }
};

export function getSeriesMap(seriesGroup) {
  let seriesMap = seriesGroup.reduce((seriesMap, seriesItem) => {
    seriesMap[seriesItem.name] = seriesItem;
    return seriesMap;
  }, {});

  return seriesMap;
}

export function getSeriesChanges(contentSeries, series) {
  let updatedKeys = Object.keys(contentSeries).filter((key) => {
    let isValidKey = key !== 'data' && key.charAt(0) !== '_';
    let isValidType = ['object', 'function'].indexOf(typeof contentSeries[key]) === -1;
    let isTheSame = contentSeries[key] === series[key];

    return isValidKey && isValidType && !isTheSame;
  });

  // returns a list of updated keys
  return updatedKeys;
}

function setDefaultHighChartOptions(owner, Highcharts) {
  if (!localConfig) {
    // use options defined in highcharts-configs/application.js if they exist
    let configFactory = owner.factoryFor('highcharts-config:application');

    if (configFactory && configFactory.class) {
      let localConfigBuilder = configFactory.class;
      localConfig = localConfigBuilder(defaultOptions);
    } else {
      localConfig = defaultOptions;
    }
  }

  Highcharts.setOptions(localConfig);
}

/* Map ember-highcharts modes to Highcharts methods
 * https://api.highcharts.com/class-reference/Highcharts.html
 */
const CHART_TYPES = {
  StockChart: 'stockChart',
  Map: 'mapChart',
  undefined: 'chart'
};

export default Component.extend({
  classNames: ['highcharts-wrapper'],
  content: undefined,
  mode: undefined,
  chartOptions: undefined,
  chart: null,
  theme: undefined,
  callback: undefined,

  buildOptions: computed('chartOptions', 'content.[]', function() {
    let theme = this.theme ?? {};
    let passedChartOptions = this.chartOptions ?? {};

    let chartOptions = merge(theme, passedChartOptions);
    let chartContent = this.content;

    // if 'no-data-to-display' module has been imported, keep empty series and leave it to highcharts to show no data label.
    if (!this.content?.length && !this.highcharts.Chart.prototype.showNoData) {
      chartContent = [{
        id: 'noData',
        data: 0,
        color: '#aaaaaa'
      }];
    }

    let defaults = { series: chartContent };

    return assign(defaults, chartOptions);
  }),

  didReceiveAttrs() {
    this._super(...arguments);

    let { content, chart, mode } = this;

    if (!content || !chart) {
      return;
    }

    let isStockChart = mode === 'StockChart';

    // create maps to make series data easier to work with
    let contentSeriesMap = getSeriesMap(content);
    let chartSeriesMap = getSeriesMap(chart.series);

    // remove and update current series
    let chartSeriesToRemove = [];

    chart.series.forEach((series) => {
      if (isStockChart && series.name.match(/^Navigator/)) {
        return;
      }

      let contentSeries = contentSeriesMap[series.name];

      if (!contentSeries) {
        return chartSeriesToRemove.push(series);
      }

      let updatedKeys = getSeriesChanges(contentSeries, series);

      // call series.update() when other series attributes like pointStart have changed
      if (updatedKeys.length) {
        series.update(contentSeries, false);
      } else {
        series.setData(contentSeries.data, false);
      }
    });

    chartSeriesToRemove.forEach((series) => series.remove(false));

    // add new series
    content.forEach((contentSeries) => {
      if (!Object.prototype.hasOwnProperty.call(chartSeriesMap, contentSeries.name)) {
        chart.addSeries(contentSeries, false);
      }
    });

    // reset navigator data
    if (isStockChart && chart.xAxis.length) {
      chart.xAxis[0].setExtremes();
    }

    return chart.redraw();
  },

  drawAfterRender() {
    run.scheduleOnce('afterRender', this, 'draw');
  },

  draw() {
    let element = this.element && this.element.querySelector('.chart-container');
    let modeAttr = this.mode ?? undefined;
    let mode = CHART_TYPES[modeAttr];
    let completeChartOptions = [this.buildOptions, this.callback];

    if (element) {
      let chart = this.highcharts[mode](element, ...completeChartOptions);
      set(this, 'chart', chart);
    }
  },

  didInsertElement() {
    this._super(...arguments);



    import('highcharts').then(module => {
      this.set('highcharts', module.default)
      this.drawAfterRender();
      setDefaultHighChartOptions(getOwner(this), this.highcharts);
    });

  },

  willDestroyElement() {
    this._super(...arguments);

    if (this.chart) {
      this.chart.destroy();
    }
  }
});
