import Modifier from 'ember-modifier';
import Highcharts from 'highcharts';
import highchartsAccessibilty from 'highcharts/modules/accessibility';

const optionsForAllCharts = {};

export default class DrawChartModifier extends Modifier {
  constructor(owner, args) {
    super(owner, args);

    this.initializeHighcharts();
  }

  modify(element, [chart]) {
    if (!chart) {
      return;
    }
  }

  initializeHighcharts() {
    highchartsAccessibilty(Highcharts);

    this.highcharts = Highcharts;
    this.highcharts.setOptions(optionsForAllCharts);
  }
}
