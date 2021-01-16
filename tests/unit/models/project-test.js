import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/projects';
import { module, test } from 'qunit';

module('Unit | Model | project', function (hooks) {
  setupTest(hooks);

  module('Ember.js', function (hooks) {
    hooks.beforeEach(function () {
      this.store = this.owner.lookup('service:store');
    });

    test('The model can describe an LTS release', function (assert) {
      const attributes = getAttributesForId('ember/lts');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/ember.js/blob/v3.20.6/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a stable release', function (assert) {
      const attributes = getAttributesForId('ember/release');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/ember.js/blob/v3.24.0/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a beta release', function (assert) {
      const attributes = getAttributesForId('ember/beta');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/ember.js/blob/v3.25.0-beta.1/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a canary release', function (assert) {
      const attributes = getAttributesForId('ember/canary');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        '',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });
  });

  module('Ember Data', function (hooks) {
    hooks.beforeEach(function () {
      this.store = this.owner.lookup('service:store');
    });

    test('The model can describe a stable release', function (assert) {
      const attributes = getAttributesForId('emberData/release');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/data/blob/v3.24.0/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a beta release', function (assert) {
      const attributes = getAttributesForId('emberData/beta');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/data/blob/v3.25.0-beta.0/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a canary release', function (assert) {
      const attributes = getAttributesForId('emberData/canary');
      const model = this.store.createRecord('project', attributes);

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        '',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });
  });
});
