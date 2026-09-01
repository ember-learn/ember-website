import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('urlForFindAll works', function (assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.strictEqual(
      adapter.urlForFindAll('project'),
      '/data/projects/all.json',
      'We get the correct URL for findAll method. (1)'
    );

    assert.strictEqual(
      adapter.urlForFindAll('team-member'),
      '/data/team-members/all.json',
      'We get the correct URL for findAll method. (2)'
    );
  });

  test('urlForFindRecord works', function (assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.strictEqual(
      adapter.urlForFindRecord('ember/release', 'project'),
      '/data/projects/ember/release.json',
      'We get the correct URL for findRecord method. (1)'
    );

    assert.strictEqual(
      adapter.urlForFindRecord('emberData/release', 'project'),
      '/data/projects/emberData/release.json',
      'We get the correct URL for findRecord method. (2)'
    );
  });
});
