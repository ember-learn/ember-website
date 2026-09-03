import type MeetupModel from 'ember-website/models/meetup';
import { setupTest } from 'ember-website/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | meetup', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<MeetupModel>('meetup', {});

    assert.ok(model);
  });
});
