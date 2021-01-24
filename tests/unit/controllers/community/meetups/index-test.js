import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import meetups from 'ember-website/mirage/data/meetups';
import { module, test } from 'qunit';

module('Unit | Controller | community/meetups/index', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    // Create data
    this.server.db.loadData({ meetups });

    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('meetup');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:community/meetups/index');
    this.controller.model = model;
  });

  test('We group Meetups by area', function (assert) {
    const { meetupsByArea } = this.controller;

    // Create an intermediate data structure for assertion
    const output = meetupsByArea.map((area) => {
      const { meetups, name } = area;
      const meetupIds = meetups.map(({ id }) => id);

      return {
        meetupIds,
        name,
      };
    });

    assert.deepEqual(
      output,
      [
        {
          meetupIds: [
            'austin-tx',
            'new-york-ny',
            'portland-or',
            'seattle-wa',
            'toronto-on',
          ],
          name: 'North America',
        },
        {
          meetupIds: ['belo-horizonte-brazil', 'santiago-chile'],
          name: 'South America',
        },
        {
          meetupIds: [
            'berlin-germany',
            'madrid-spain',
            'nizhny-novgorod-russia',
            'zurich-switzerland',
          ],
          name: 'Europe',
        },
        {
          meetupIds: ['cape-town-south-africa'],
          name: 'Africa',
        },
        {
          meetupIds: ['chennai-india', 'tel-aviv-israel'],
          name: 'Asia',
        },
        {
          meetupIds: ['wellington-new-zealand'],
          name: 'Oceania',
        },
      ],
      'We get the correct output.'
    );
  });
});
