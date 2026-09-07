import {
  AreaSplineChart,
  HorizontalBarChart,
  PieChart,
  SplineChart,
  VerticalBarChart,
} from 'ember-website/utils/highcharts/index';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/index', function (hooks) {
  setupTest(hooks);

  module('AreaSplineChart', function () {
    test('it exists', function (assert) {
      assert.ok(AreaSplineChart);
    });
  });

  module('HorizontalBarChart', function () {
    test('it exists', function (assert) {
      assert.ok(HorizontalBarChart);
    });
  });

  module('PieChart', function () {
    test('it exists', function (assert) {
      assert.ok(PieChart);
    });
  });

  module('SplineChart', function () {
    test('it exists', function (assert) {
      assert.ok(SplineChart);
    });
  });

  module('VerticalBarChart', function () {
    test('it exists', function (assert) {
      assert.ok(VerticalBarChart);
    });
  });
});
