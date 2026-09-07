import { setupTest } from 'ember-qunit';
import {
  MS_Q103,
  MS_Q111,
  MS_Q112,
  MS_Q304,
  MS_Q401,
  MS_Q406,
  MS_Q413,
  MS_Q601,
  SS_Q101,
  SS_Q104,
  SS_Q204,
  SS_Q302,
  SS_Q305,
  SS_Q306,
  stackSkillsChart,
} from 'ember-website/utils/surveys/2020';
import { module, test } from 'qunit';

module('Unit | Utility | surveys/2020', function (hooks) {
  setupTest(hooks);

  module('MS_Q103', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q103);
    });
  });

  module('MS_Q111', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q111);
    });
  });

  module('MS_Q112', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q112);
    });
  });

  module('MS_Q304', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q304);
    });
  });

  module('MS_Q401', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q401);
    });
  });

  module('MS_Q406', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q406);
    });
  });

  module('MS_Q413', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q413);
    });
  });

  module('MS_Q601', function () {
    test('it exists', function (assert) {
      assert.ok(MS_Q601);
    });
  });

  module('SS_Q101', function () {
    test('it exists', function (assert) {
      assert.ok(SS_Q101);
    });
  });

  module('SS_Q104', function () {
    test('it exists', function (assert) {
      assert.ok(SS_Q104);
    });
  });

  module('SS_Q204', function () {
    test('it exists', function (assert) {
      assert.ok(SS_Q204);
    });
  });

  module('SS_Q302', function () {
    test('it exists', function (assert) {
      assert.ok(SS_Q302);
    });
  });

  module('SS_Q305', function () {
    test('it exists', function (assert) {
      assert.ok(SS_Q305);
    });
  });

  module('SS_Q306', function () {
    test('it exists', function (assert) {
      assert.ok(SS_Q306);
    });
  });

  module('stackSkillsChart', function () {
    test('it exists', function (assert) {
      assert.ok(stackSkillsChart);
    });
  });
});
