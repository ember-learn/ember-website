import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type CommunityMeetupsIndexController from 'ember-website/controllers/community/meetups';
import type Meetup from 'ember-website/models/meetup';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  controller: CommunityMeetupsIndexController;
}

module('Unit | Controller | community/meetups/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(async function (this: TestContext) {
    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll<Meetup>('meetup');

    // Run setupController hook
    this.controller = this.owner.lookup(
      'controller:community/meetups/index',
    ) as CommunityMeetupsIndexController;
    this.controller.model = model;
  });

  test('We group Meetups by area', function (this: TestContext, assert) {
    const { meetupsByArea } = this.controller;

    // Create an intermediate data structure for assertion
    const output = meetupsByArea.map((area) => {
      const { meetups, name } = area;
      const meetupIds = meetups.map(({ id }) => id!);

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
