import { setupTest } from 'ember-qunit';
import {
  dataLtsReleases,
  emberLtsReleases,
} from 'ember-website/utils/releases/lts';
import { module, test } from 'qunit';

module('Unit | Utility | releases/lts', function (hooks) {
  setupTest(hooks);

  module('dataLtsReleases', function () {
    test('it exists', function (assert) {
      assert.ok(dataLtsReleases);
    });
  });

  module('emberLtsReleases', function () {
    test('it exists', function (assert) {
      assert.ok(emberLtsReleases);
    });
  });
});
