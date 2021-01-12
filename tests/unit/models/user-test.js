import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/users';
import { module, test } from 'qunit';

module('Unit | Model | user', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a featured user of Ember.js', function (assert) {
    const attributes = getAttributesForId('linkedin');
    const model = this.store.createRecord('user', attributes);

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a non-featured user of Ember.js', function (assert) {
    const attributes = getAttributesForId('wnyc');
    const model = this.store.createRecord('user', attributes);

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe an inactive user of Ember.js', function (assert) {
    const attributes = getAttributesForId('velocity-labs');
    const model = this.store.createRecord('user', attributes);

    assert.ok(model, 'We can create the record.');
  });
});
