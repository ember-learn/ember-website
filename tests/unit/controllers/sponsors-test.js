import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import sponsors from 'ember-website/mirage/data/sponsors';
import { module, test } from 'qunit';

module('Unit | Controller | sponsors', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    // Create data
    this.server.db.loadData({ sponsors });

    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('sponsor');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:sponsors');
    this.controller.model = model;
  });

  test('We sort sponsors by end, then by start', function (assert) {
    const { sortedModel } = this.controller;

    // Create an intermediate data structure for assertion
    const output = sortedModel.map((sponsor) => sponsor.id);

    assert.deepEqual(
      output,
      [
        '201-created',
        'discourse',
        'bookingsync',
        'yapp',
        'dockyard',
        'bustle',
        'yahoo',
        'addepar',
        'mhelabs',
        'livingsocial',
        'tilde',
        'linkedin',
        'cardstack',
        'simplabs',
      ],
      'We get the correct output.'
    );
  });

  test('We sort current sponsors by start', function (assert) {
    const { currentSponsors } = this.controller;

    // Create an intermediate data structure for assertion
    const output = currentSponsors.map((sponsor) => sponsor.id);

    assert.deepEqual(
      output,
      ['tilde', 'linkedin', 'cardstack', 'simplabs'],
      'We get the correct output.'
    );
  });

  test('We sort past sponsors by end, then by start', function (assert) {
    const { pastSponsors } = this.controller;

    // Create an intermediate data structure for assertion
    const output = pastSponsors.map((sponsor) => sponsor.id);

    assert.deepEqual(
      output,
      [
        '201-created',
        'discourse',
        'bookingsync',
        'yapp',
        'dockyard',
        'bustle',
        'yahoo',
        'addepar',
        'mhelabs',
        'livingsocial',
      ],
      'We get the correct output.'
    );
  });
});
