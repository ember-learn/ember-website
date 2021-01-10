import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | sponsor', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a current sponsor', function(assert) {
    const model = this.store.createRecord('sponsor', {
      content: 'Yehuda Katz, Leah Silber, Godfrey Chan',
      end: undefined,
      id: 'tilde',
      image: 'tilde-logo.svg',
      name: 'Tilde',
      start: new Date('2011-01-01'),
      url: 'https://www.tilde.io/',
    });

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2011 - present',
      'We get the correct value for term.'
    );
  });

  test('The model can describe a past sponsor (1)', function(assert) {
    const model = this.store.createRecord('sponsor', {
      content: 'Matthew Beale',
      end: new Date('2018-12-31'),
      id: '201-created',
      image: '201-created.png',
      name: '201 Created',
      start: new Date('2015-01-02'),
      url: 'https://www.201-created.com',
    });

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2015 - 2018',
      'We get the correct value for term.'
    );
  });

  test('The model can describe a past sponsor (2)', function(assert) {
    const model = this.store.createRecord('sponsor', {
      content: 'Performance',
      end: new Date('2018-01-01'),
      id: 'discourse',
      image: 'discourse.png',
      name: 'Discourse',
      start: new Date('2018-12-31'),
      url: 'https://www.discourse.com',
    });

    assert.ok(model, 'We can create the record.');

    assert.strictEqual(
      model.term,
      '2018',
      'We get the correct value for term.'
    );
  });
});
