import { setupTest } from 'ember-qunit';
import {
  chartBrowserSupport,
  chartEmberAtTheOffice,
  chartEmberEcosystem,
  chartHowlong,
  chartLongLivedCodebases,
  chartNewReleaseAdoptionEmber,
  chartNewReleaseAdoptionEmberData,
  chartSEO,
  chartServerSide,
} from 'ember-website/utils/surveys/2016';
import { module, test } from 'qunit';

module('Unit | Utility | surveys/2016', function (hooks) {
  setupTest(hooks);

  module('chartBrowserSupport', function () {
    test('it exists', function (assert) {
      assert.ok(chartBrowserSupport);
    });
  });

  module('chartEmberAtTheOffice', function () {
    test('it exists', function (assert) {
      assert.ok(chartEmberAtTheOffice);
    });
  });

  module('chartEmberEcosystem', function () {
    test('it exists', function (assert) {
      assert.ok(chartEmberEcosystem);
    });
  });

  module('chartHowlong', function () {
    test('it exists', function (assert) {
      assert.ok(chartHowlong);
    });
  });

  module('chartLongLivedCodebases', function () {
    test('it exists', function (assert) {
      assert.ok(chartLongLivedCodebases);
    });
  });

  module('chartNewReleaseAdoptionEmber', function () {
    test('it exists', function (assert) {
      assert.ok(chartNewReleaseAdoptionEmber);
    });
  });

  module('chartNewReleaseAdoptionEmberData', function () {
    test('it exists', function (assert) {
      assert.ok(chartNewReleaseAdoptionEmberData);
    });
  });

  module('chartSEO', function () {
    test('it exists', function (assert) {
      assert.ok(chartSEO);
    });
  });

  module('chartServerSide', function () {
    test('it exists', function (assert) {
      assert.ok(chartServerSide);
    });
  });
});
