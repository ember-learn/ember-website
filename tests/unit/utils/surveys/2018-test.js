import { setupTest } from 'ember-qunit';
import {
  applicationUsers,
  browserRequirements,
  communityParticipation,
  demographicsRegion,
  editorTool,
  emberDataAdoption,
  emberenoEmployment,
  employerUsingEmber,
  gettingHired,
  longLivedCodebases,
  newReleaseAdoption,
  productionApps,
  recommendingEmber,
  serverSide,
  serverSideFrameworks,
  teamSize,
} from 'ember-website/utils/surveys/2018';
import { module, test } from 'qunit';

module('Unit | Utility | surveys/2018', function (hooks) {
  setupTest(hooks);

  module('applicationUsers', function () {
    test('it exists', function (assert) {
      assert.ok(applicationUsers);
    });
  });

  module('browserRequirements', function () {
    test('it exists', function (assert) {
      assert.ok(browserRequirements);
    });
  });

  module('communityParticipation', function () {
    test('it exists', function (assert) {
      assert.ok(communityParticipation);
    });
  });

  module('demographicsRegion', function () {
    test('it exists', function (assert) {
      assert.ok(demographicsRegion);
    });
  });

  module('editorTool', function () {
    test('it exists', function (assert) {
      assert.ok(editorTool);
    });
  });

  module('emberDataAdoption', function () {
    test('it exists', function (assert) {
      assert.ok(emberDataAdoption);
    });
  });

  module('emberenoEmployment', function () {
    test('it exists', function (assert) {
      assert.ok(emberenoEmployment);
    });
  });

  module('employerUsingEmber', function () {
    test('it exists', function (assert) {
      assert.ok(employerUsingEmber);
    });
  });

  module('gettingHired', function () {
    test('it exists', function (assert) {
      assert.ok(gettingHired);
    });
  });

  module('longLivedCodebases', function () {
    test('it exists', function (assert) {
      assert.ok(longLivedCodebases);
    });
  });

  module('newReleaseAdoption', function () {
    test('it exists', function (assert) {
      assert.ok(newReleaseAdoption);
    });
  });

  module('productionApps', function () {
    test('it exists', function (assert) {
      assert.ok(productionApps);
    });
  });

  module('recommendingEmber', function () {
    test('it exists', function (assert) {
      assert.ok(recommendingEmber);
    });
  });

  module('serverSide', function () {
    test('it exists', function (assert) {
      assert.ok(serverSide);
    });
  });

  module('serverSideFrameworks', function () {
    test('it exists', function (assert) {
      assert.ok(serverSideFrameworks);
    });
  });

  module('teamSize', function () {
    test('it exists', function (assert) {
      assert.ok(teamSize);
    });
  });
});
