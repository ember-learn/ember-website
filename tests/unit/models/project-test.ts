import type { Registry as Services } from '@ember/service';
import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type Project from 'ember-website/models/project';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  store: Services['store'];
}

module('Unit | Model | project', function (hooks) {
  setupTest(hooks);

  module('Ember.js', function (hooks) {
    hooks.beforeEach(function (this: TestContext) {
      this.store = this.owner.lookup('service:store');
    });

    test('The model can generate a lastReleaseChangelogUrl correctly', function (this: TestContext, assert) {
      const model = this.store.createRecord<Project>('project', {
        repo: 'face/mine.js',
        lastRelease: '7',
        changelogPath: 'CHANGELOG.md',
      });

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/face/mine.js/blob/v7/CHANGELOG.md',
      );
    });

    test('No lastReleaseChangelogUrl is generated if changelogPath is missing', function (this: TestContext, assert) {
      const model = this.store.createRecord<Project>('project', {
        repo: 'face/mine.js',
        lastRelease: '7',
      });

      assert.strictEqual(model.lastReleaseChangelogUrl, '');
    });
  });
});
