import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | project', function (hooks) {
  setupTest(hooks);

  module('Ember.js', function (hooks) {
    hooks.beforeEach(function () {
      this.store = this.owner.lookup('service:store');
    });

    test('The model can generate a lastReleaseChangelogUrl correctly', function (assert) {
      const model = this.store.createRecord('project', {
        repo: 'face/mine.js',
        lastRelease: '7',
        changelogPath: 'CHANGELOG.md',
      });

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/face/mine.js/blob/v7/CHANGELOG.md'
      );
    });

    test('No lastReleaseChangelogUrl is generated if changelogPath is missing', function (assert) {
      const model = this.store.createRecord('project', {
        repo: 'face/mine.js',
        lastRelease: '7',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(model.lastReleaseChangelogUrl, '');
    });
  });
});
