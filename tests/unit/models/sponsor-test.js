import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/sponsors';
import { module, test } from 'qunit';

module('Unit | Model | sponsor', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a current sponsor', function (assert) {
    const attributes = getAttributesForId('tilde');
    const model = this.store.createRecord('sponsor', attributes);

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2011 - present',
      'We get the correct value for term.'
    );
  });

  test('The model can describe a past sponsor (1)', function (assert) {
    const attributes = getAttributesForId('201-created');
    const model = this.store.createRecord('sponsor', attributes);

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2015 - 2018',
      'We get the correct value for term.'
    );
  });

  test('The model can describe a past sponsor (2)', function (assert) {
    const attributes = getAttributesForId('discourse');
    const model = this.store.createRecord('sponsor', attributes);

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2018',
      'We get the correct value for term.'
    );
  });
});
