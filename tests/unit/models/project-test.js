import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | project', function (hooks) {
  setupTest(hooks);

  module('Ember.js', function (hooks) {
    hooks.beforeEach(function () {
      this.store = this.owner.lookup('service:store');
    });

    test('The model can describe an LTS release', function (assert) {
      const model = this.store.createRecord('project', {
        baseFileName: 'ember',
        changelogPath: 'CHANGELOG.md',
        channel: 'lts',
        content:
          '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s',
        cycleEstimatedFinishDate: undefined,
        date: new Date('2020-09-09'),
        debugFileName: '.debug.js',
        filter: ['/ember\\./', '/ember-template-compiler/'],
        finalVersion: undefined,
        futureVersion: '3.20.7',
        id: 'ember/lts',
        ignoreFiles: ['ember.js'],
        initialVersion: '3.20.0',
        lastRelease: '3.20.6',
        name: 'Ember',
        nextDate: undefined,
        repo: 'emberjs/ember.js',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        false,
        'We get the correct value for isEmberBeta.'
      );

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/ember.js/blob/v3.20.6/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a stable release', function (assert) {
      const model = this.store.createRecord('project', {
        baseFileName: 'ember',
        changelogPath: 'CHANGELOG.md',
        channel: 'release',
        content:
          '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s',
        cycleEstimatedFinishDate: undefined,
        date: new Date('2021-01-07'),
        debugFileName: '.debug.js',
        filter: ['/ember\\./', '/ember-template-compiler/'],
        finalVersion: undefined,
        futureVersion: '3.24.1',
        id: 'ember/release',
        ignoreFiles: ['ember.js'],
        initialVersion: '3.24.0',
        lastRelease: '3.24.0',
        name: 'Ember',
        nextDate: undefined,
        repo: 'emberjs/ember.js',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        false,
        'We get the correct value for isEmberBeta.'
      );

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/ember.js/blob/v3.24.0/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a beta release', function (assert) {
      const model = this.store.createRecord('project', {
        baseFileName: 'ember',
        changelogPath: 'CHANGELOG.md',
        channel: 'beta',
        content:
          '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s',
        cycleEstimatedFinishDate: new Date('2021-02-08'),
        date: new Date('2020-12-28'),
        debugFileName: '.debug.js',
        filter: ['/ember\\./', '/ember-template-compiler/'],
        finalVersion: '3.25.0',
        futureVersion: '3.25.0-beta.2',
        id: 'ember/beta',
        ignoreFiles: ['ember.js'],
        initialVersion: '3.24.0',
        lastRelease: '3.25.0-beta.1',
        name: 'Ember',
        nextDate: new Date('2021-02-08'),
        repo: 'emberjs/ember.js',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        true,
        'We get the correct value for isEmberBeta.'
      );

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/ember.js/blob/v3.25.0-beta.1/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a canary release', function (assert) {
      const model = this.store.createRecord('project', {
        baseFileName: 'ember',
        changelogPath: undefined,
        channel: 'canary',
        content: '',
        cycleEstimatedFinishDate: undefined,
        date: undefined,
        debugFileName: '.debug.js',
        filter: ['/ember\\./', '/ember-template-compiler/'],
        finalVersion: undefined,
        futureVersion: undefined,
        id: 'ember/canary',
        ignoreFiles: ['ember.js'],
        initialVersion: undefined,
        lastRelease: undefined,
        name: 'Ember',
        nextDate: undefined,
        repo: 'emberjs/ember.js',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        false,
        'We get the correct value for isEmberBeta.'
      );

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
      const model = this.store.createRecord('project', {
        baseFileName: 'ember-data',
        changelogPath: 'CHANGELOG.md',
        channel: 'release',
        content:
          '# Install Ember-Data %s:\n<br>\nnpm install --save-dev ember-data@%s',
        cycleEstimatedFinishDate: undefined,
        date: new Date('2021-01-07'),
        debugFileName: '.js',
        filter: ['/ember-data\\./'],
        finalVersion: undefined,
        futureVersion: '3.24.1',
        id: 'emberData/release',
        ignoreFiles: undefined,
        initialVersion: '3.24.0',
        lastRelease: '3.24.0',
        name: 'Ember Data',
        nextDate: undefined,
        repo: 'emberjs/data',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        false,
        'We get the correct value for isEmberBeta.'
      );

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/data/blob/v3.24.0/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a beta release', function (assert) {
      const model = this.store.createRecord('project', {
        baseFileName: 'ember-data',
        changelogPath: 'CHANGELOG.md',
        channel: 'beta',
        content:
          '# Install Ember-Data %s:\n<br>\nnpm install --save-dev ember-data@%s',
        cycleEstimatedFinishDate: undefined,
        date: new Date('2021-01-05'),
        debugFileName: '.js',
        filter: ['/ember-data\\./'],
        finalVersion: '3.25.0',
        futureVersion: '3.25.0-beta.1',
        id: 'emberData/beta',
        ignoreFiles: ['ember.js'],
        initialVersion: undefined,
        lastRelease: '3.25.0-beta.0',
        name: 'Ember Data',
        nextDate: undefined,
        repo: 'emberjs/data',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        false,
        'We get the correct value for isEmberBeta.'
      );

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        'https://github.com/emberjs/data/blob/v3.25.0-beta.0/CHANGELOG.md',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });

    test('The model can describe a canary release', function (assert) {
      const model = this.store.createRecord('project', {
        baseFileName: 'ember-data',
        changelogPath: undefined,
        channel: 'canary',
        content:
          '# Install the latest Ember-Data canary:\n<br>\nnpm install --save-dev emberjs/data#master',
        cycleEstimatedFinishDate: undefined,
        date: undefined,
        debugFileName: '.js',
        filter: ['/ember-data\\./'],
        finalVersion: undefined,
        futureVersion: undefined,
        id: 'emberData/canary',
        ignoreFiles: undefined,
        initialVersion: undefined,
        lastRelease: undefined,
        name: 'Ember Data',
        nextDate: undefined,
        repo: 'emberjs/data',
      });

      assert.ok(model, 'We can create the record.');

      assert.strictEqual(
        model.isEmberBeta,
        false,
        'We get the correct value for isEmberBeta.'
      );

      assert.strictEqual(
        model.lastReleaseChangelogUrl,
        '',
        'We get the correct value for lastReleaseChangelogUrl.'
      );
    });
  });
});
