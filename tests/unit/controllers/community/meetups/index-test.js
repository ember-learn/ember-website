import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | community/meetups/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(async function () {
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

    assert.deepEqual(output, [
      {
        meetupIds: [
          'amsterdamthe-netherlands',
          'berlin-germany',
          'brussels-belgium',
          'dublin-ireland',
          'helsinki-finland',
          'london-uk',
          'munich-germany',
          'nizhny-novgorod-russia',
          'paris-france',
        ],
        name: 'Europe',
      },
      {
        meetupIds: [
          'atlanta-ga',
          'austin-tx',
          'boston-ma',
          'chicago-il',
          'houston-tx',
          'new-york-ny',
          'seattle-wa',
          'silicon-valley-ca',
          'toronto-on',
          'vancouver-bc',
          'washington-dc',
        ],
        name: 'North America',
      },
      {
        meetupIds: ['melbourne-australia', 'wellington-new-zealand'],
        name: 'Oceania',
      },
      {
        meetupIds: ['tokyo-japan'],
        name: 'Asia',
      },
    ]);
  });
});
