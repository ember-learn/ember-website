import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | sponsor', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a current sponsor', function (assert) {
    const model = this.store.createRecord('sponsor', {
      name: 'Super Corp.',
      start: new Date('2011-01-01'),
    });

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2011 - present',
      'We get the correct value for term.'
    );
  });

  test('The model can describe a past sponsor that spanned multiple years', function (assert) {
    const model = this.store.createRecord('sponsor', {
      name: 'Super Corp.',
      start: new Date('2015-01-01'),
      end: new Date('2018-01-01'),
    });

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2015 - 2018',
      'We get the correct value for term.'
    );
  });

  test('The model can describe a past sponsor that only sponsored one year', function (assert) {
    const model = this.store.createRecord('sponsor', {
      name: 'Super Corp.',
      start: new Date('2018-01-01'),
      end: new Date('2018-08-01'),
    });

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2018',
      'We get the correct value for term.'
    );
  });
});
