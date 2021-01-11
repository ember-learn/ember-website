import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | meetup', function (hooks) {
  setupTest(hooks);

  test('The model can describe a Meetup', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('meetup', {
      area: 'North America',
      id: 'austin-tx',
      lat: 30.305083,
      lng: -97.743753,
      location: 'Austin, TX',
      organizers: [
        {
          organizer: 'Brandon Hays',
          profileImage:
            'https://photos4.meetupstatic.com/photos/member/c/e/2/4/thumb_111832772.jpeg',
        },
      ],
      url: 'https://www.meetup.com/Ember-ATX/',
    });

    assert.ok(model, 'We can create the record.');
  });
});
