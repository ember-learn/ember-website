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
    const output = meetupsByArea.reduce((accumulator, group) => {
      const area = group.value;
      const meetupIds = group.items.map((meetup) => meetup.id);

      accumulator.push({
        area,
        meetupIds,
      });

      return accumulator;
    }, []);

    assert.deepEqual(
      output,
      [
        {
          area: 'North America',
          meetupIds: [
            'austin-tx',
            'new-york-ny',
            'portland-or',
            'seattle-wa',
            'toronto-on',
          ],
        },
        {
          area: 'South America',
          meetupIds: ['belo-horizonte-brazil', 'santiago-chile'],
        },
        {
          area: 'Europe',
          meetupIds: [
            'berlin-germany',
            'madrid-spain',
            'nizhny-novgorod-russia',
            'zurich-switzerland',
          ],
        },
        {
          area: 'Africa',
          meetupIds: ['cape-town-south-africa'],
        },
        {
          area: 'Asia',
          meetupIds: ['chennai-india', 'tel-aviv-israel'],
        },
        {
          area: 'Oceania',
          meetupIds: ['wellington-new-zealand'],
        },
      ],
      'We get the correct output.'
    );
  });
});
