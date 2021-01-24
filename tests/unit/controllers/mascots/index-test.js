import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import tomsters from 'ember-website/mirage/data/tomsters';
import { module, test } from 'qunit';

module('Unit | Controller | mascots/index', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    // Create data
    this.server.db.loadData({ tomsters });

    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('tomster');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:mascots/index');
    this.controller.model = model;
  });

  module('filteredMascots', function () {
    test('returns all mascots when filter is undefined', function (assert) {
      this.controller.filter = undefined;

      const { filteredMascots } = this.controller;

      // Create an intermediate data structure for assertion
      const output = filteredMascots.map(({ id }) => id);

      assert.deepEqual(
        output,
        tomsters.map(({ id }) => id),
        'We get the correct output.'
      );
    });

    test('returns a subset of mascots when a filter is defined', function (assert) {
      this.controller.filter = 'zoey';

      let { filteredMascots } = this.controller;
      let output = filteredMascots.map(({ id }) => id);

      assert.deepEqual(
        output,
        [
          'austin-zoey',
          'ember-a11y',
          'ember-conf2019',
          'octane',
          'san-diego-zoey',
          'skylight',
        ],
        'We get the correct output.'
      );

      // Update the filter
      this.controller.filter = 'other';

      ({ filteredMascots } = this.controller);
      output = filteredMascots.map(({ id }) => id);

      assert.deepEqual(
        output,
        ['ember-a11y', 'octane', 'stable-release-bust', 'teaching-tomster'],
        'We get the correct output.'
      );

      // Update the filter
      this.controller.filter = 'all';

      ({ filteredMascots } = this.controller);
      output = filteredMascots.map(({ id }) => id);

      assert.deepEqual(
        output,
        tomsters.map(({ id }) => id),
        'We get the correct output.'
      );
    });
  });
});
