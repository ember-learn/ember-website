import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/meetups';
import { module, test } from 'qunit';

module('Unit | Model | meetup', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a Meetup', function (assert) {
    const attributes = getAttributesForId('austin-tx');
    const model = this.store.createRecord('meetup', attributes);

    assert.ok(model, 'We can create the record.');
  });
});
