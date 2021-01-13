import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/team-members';
import { module, test } from 'qunit';

module('Unit | Model | team member', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a person that belongs to 1 team', function (assert) {
    const attributes = getAttributesForId('isaac-lee');
    const model = this.store.createRecord('team-member', attributes);

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a person that belongs to multiple teams', function (assert) {
    const attributes = getAttributesForId('katie-gengler');
    const model = this.store.createRecord('team-member', attributes);

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a person who is an alumnus or alumna', function (assert) {
    const attributes = getAttributesForId('trek-glowacki');
    const model = this.store.createRecord('team-member', attributes);

    assert.ok(model, 'We can create the record.');
  });
});
