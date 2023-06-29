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
          'adelaide-australia',
          'melbourne-australia',
          'sydney-australia',
          'wellington-new-zealand',
        ],
        name: 'Oceania',
      },
      {
        meetupIds: [
          'amsterdamthe-netherlands',
          'barcelona-spain',
          'berlin-germany',
          'bielsko-biala-poland',
          'brussels-belgium',
          'budapest-hungary',
          'dublin-ireland',
          'hamburg-germany',
          'helsinki-finland',
          'london-uk',
          'madrid-spain',
          'manchester-uk',
          'munich-germany',
          'nizhny-novgorod-russia',
          'oslo-norway',
          'paris-france',
          'saint-petersburg-russia',
          'stockholm-sweden',
          'treviso-italy',
          'zurich-switzerland',
        ],
        name: 'Europe',
      },
      {
        meetupIds: [
          'ann-arbor-mi',
          'atlanta-ga',
          'austin-tx',
          'boston-ma',
          'calgary-ab',
          'chicago-il',
          'cincinnati-oh',
          'dallas-tx',
          'denver-co',
          'houston-tx',
          'indianapolis-in',
          'jacksonville-beach-fl',
          'los-angeles-ca',
          'louisville-ky',
          'madison-wi',
          'minneapolis-st.-paul-mn',
          'nashville-tn',
          'new-york-ny',
          'orange-county-ca',
          'orlando-fl',
          'philadelphia-pa',
          'phoenix-az',
          'portland-or',
          'raleigh-nc',
          'riverside-ca',
          'salt-lake-city-ut',
          'san-diego-ca',
          'san-francisco-ca',
          'seattle-wa',
          'silicon-valley-ca',
          'st.-louis-mo',
          'toronto-on',
          'vancouver-bc',
          'washington-dc',
        ],
        name: 'North America',
      },
      {
        meetupIds: [
          'belo-horizonte-brazil',
          'medellin-colombia',
          'montevideo-uruguay',
          'santiago-chile',
          'sao-paulo-brazil',
        ],
        name: 'South America',
      },
      {
        meetupIds: ['cape-town-south-africa'],
        name: 'Africa',
      },
      {
        meetupIds: ['chennai-india', 'tel-aviv-israel', 'tokyo-japan'],
        name: 'Asia',
      },
    ]);
  });
});
