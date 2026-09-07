import { setupTest } from 'ember-qunit';
import {
  S01_Q01_SS__TIME_USE,
  S01_Q02_MS__OTHER_FRAMEWORKS,
  S01_Q03_MS__OTHER_UI_LIBS,
  S01_Q04_MS__OTHER_SSG,
  S01_QM01_SS__MERGED_WEB_SKILLS,
  S02_Q01_SS__OS_PREF,
  S02_Q02_SS__OS_WORK,
  S02_Q03_SS__OS_HOME,
  S02_QM01_SS__MERGED_IDE_PREF,
  S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED,
  S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK,
  S03_QM01_MS__MERGED_WORK_SECTOR,
  S03_QM02_SS__MERGED_WORK_TEST_FW,
  S03_QM03_SS__MERGED_DEPLOY_WORK,
  S05_Q01_MS__FB_OCTANE,
  S05_Q02_MS__FB_NEW_FEAT,
  S05_Q04_MS__FFEAT,
  S06_QM01_SS__MERGED_GLOBAL_LOC,
} from 'ember-website/utils/surveys/2022';
import { module, test } from 'qunit';

module('Unit | Utility | surveys/2022', function (hooks) {
  setupTest(hooks);

  module('S01_Q01_SS__TIME_USE', function () {
    test('it exists', function (assert) {
      assert.ok(S01_Q01_SS__TIME_USE);
    });
  });

  module('S01_Q02_MS__OTHER_FRAMEWORKS', function () {
    test('it exists', function (assert) {
      assert.ok(S01_Q02_MS__OTHER_FRAMEWORKS);
    });
  });

  module('S01_Q03_MS__OTHER_UI_LIBS', function () {
    test('it exists', function (assert) {
      assert.ok(S01_Q03_MS__OTHER_UI_LIBS);
    });
  });

  module('S01_Q04_MS__OTHER_SSG', function () {
    test('it exists', function (assert) {
      assert.ok(S01_Q04_MS__OTHER_SSG);
    });
  });

  module('S01_QM01_SS__MERGED_WEB_SKILLS', function () {
    test('it exists', function (assert) {
      assert.ok(S01_QM01_SS__MERGED_WEB_SKILLS);
    });
  });

  module('S02_Q01_SS__OS_PREF', function () {
    test('it exists', function (assert) {
      assert.ok(S02_Q01_SS__OS_PREF);
    });
  });

  module('S02_Q02_SS__OS_WORK', function () {
    test('it exists', function (assert) {
      assert.ok(S02_Q02_SS__OS_WORK);
    });
  });

  module('S02_Q03_SS__OS_HOME', function () {
    test('it exists', function (assert) {
      assert.ok(S02_Q03_SS__OS_HOME);
    });
  });

  module('S02_QM01_SS__MERGED_IDE_PREF', function () {
    test('it exists', function (assert) {
      assert.ok(S02_QM01_SS__MERGED_IDE_PREF);
    });
  });

  module('S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED', function () {
    test('it exists', function (assert) {
      assert.ok(S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED);
    });
  });

  module('S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK', function () {
    test('it exists', function (assert) {
      assert.ok(S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK);
    });
  });

  module('S03_QM01_MS__MERGED_WORK_SECTOR', function () {
    test('it exists', function (assert) {
      assert.ok(S03_QM01_MS__MERGED_WORK_SECTOR);
    });
  });

  module('S03_QM02_SS__MERGED_WORK_TEST_FW', function () {
    test('it exists', function (assert) {
      assert.ok(S03_QM02_SS__MERGED_WORK_TEST_FW);
    });
  });

  module('S03_QM03_SS__MERGED_DEPLOY_WORK', function () {
    test('it exists', function (assert) {
      assert.ok(S03_QM03_SS__MERGED_DEPLOY_WORK);
    });
  });

  module('S05_Q01_MS__FB_OCTANE', function () {
    test('it exists', function (assert) {
      assert.ok(S05_Q01_MS__FB_OCTANE);
    });
  });

  module('S05_Q02_MS__FB_NEW_FEAT', function () {
    test('it exists', function (assert) {
      assert.ok(S05_Q02_MS__FB_NEW_FEAT);
    });
  });

  module('S05_Q04_MS__FFEAT', function () {
    test('it exists', function (assert) {
      assert.ok(S05_Q04_MS__FFEAT);
    });
  });

  module('S06_QM01_SS__MERGED_GLOBAL_LOC', function () {
    test('it exists', function (assert) {
      assert.ok(S06_QM01_SS__MERGED_GLOBAL_LOC);
    });
  });
});
