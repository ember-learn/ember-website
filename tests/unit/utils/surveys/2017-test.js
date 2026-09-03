import { setupTest } from 'ember-qunit';
import {
  browserRequirements,
  chartHowlong,
  chartSnapshotEmberDevelopers,
  demographics,
  emberDevelopers,
  employmentSituation,
  longLived,
  preExistingKnowledge,
  priorVersionsData,
  productionUsers,
  recommendingEmber,
  serverLanguage,
  textEditor,
  whenStarting,
} from 'ember-website/utils/surveys/2017';
import { module, test } from 'qunit';

module('Unit | Utility | surveys/2017', function (hooks) {
  setupTest(hooks);

  module('browserRequirements', function () {
    test('it exists', function (assert) {
      assert.ok(browserRequirements);
    });
  });

  module('chartHowlong', function () {
    test('it exists', function (assert) {
      assert.ok(chartHowlong);
    });
  });

  module('chartSnapshotEmberDevelopers', function () {
    test('it exists', function (assert) {
      assert.ok(chartSnapshotEmberDevelopers);
    });
  });

  module('demographics', function () {
    test('it exists', function (assert) {
      assert.ok(demographics);
    });
  });

  module('emberDevelopers', function () {
    test('it exists', function (assert) {
      assert.ok(emberDevelopers);
    });
  });

  module('employmentSituation', function () {
    test('it exists', function (assert) {
      assert.ok(employmentSituation);
    });
  });

  module('longLived', function () {
    test('it exists', function (assert) {
      assert.ok(longLived);
    });
  });

  module('preExistingKnowledge', function () {
    test('it exists', function (assert) {
      assert.ok(preExistingKnowledge);
    });
  });

  module('priorVersionsData', function () {
    test('it exists', function (assert) {
      assert.ok(priorVersionsData);
    });
  });

  module('productionUsers', function () {
    test('it exists', function (assert) {
      assert.ok(productionUsers);
    });
  });

  module('recommendingEmber', function () {
    test('it exists', function (assert) {
      assert.ok(recommendingEmber);
    });
  });

  module('serverLanguage', function () {
    test('it exists', function (assert) {
      assert.ok(serverLanguage);
    });
  });

  module('textEditor', function () {
    test('it exists', function (assert) {
      assert.ok(textEditor);
    });
  });

  module('whenStarting', function () {
    test('it exists', function (assert) {
      assert.ok(whenStarting);
    });
  });
});
