import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import users from 'ember-website/mirage/data/users';
import { module, test } from 'qunit';

module('Unit | Controller | ember-users', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    // Create Meetup data
    this.server.db.loadData({ users });

    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('user');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:ember-users');
    this.controller.model = model;
  });

  test('We sort users of Ember.js by featured, then by added', function (assert) {
    const { sortedModel } = this.controller;

    // Create an intermediate data structure for assertion
    const output = sortedModel.map((user) => user.id);

    assert.deepEqual(
      output,
      [
        'ted',
        'netflix',
        'linkedin',
        'velocity-labs',
        'wnyc',
        'clark-smart-insurance',
        '201-created',
        'articad',
      ],
      'We get the correct output.'
    );
  });
});
