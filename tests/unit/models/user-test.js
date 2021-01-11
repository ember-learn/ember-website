import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | user', function (hooks) {
  setupTest(hooks);

  test('The model can describe a featured user of Ember.js', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('user', {
      added: new Date('2015-06-02'),
      content: '',
      featured: true,
      id: 'linkedin',
      image: 'linkedin.png',
      inactive: undefined,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
    });

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a non-featured user of Ember.js', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('user', {
      added: new Date('2016-09-16'),
      content: "WNYC's front-end is fully powered by Ember",
      featured: undefined,
      id: 'wnyc',
      image: 'wnyc.png',
      inactive: undefined,
      name: 'WNYC',
      url: 'https://www.wnyc.org/',
    });

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe an inactive user of Ember.js', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('user', {
      added: new Date('2015-08-08'),
      content:
        'Consultancy who uses Ember to built our clients awesome client-side apps',
      featured: undefined,
      id: 'velocity-labs',
      image: 'velocitylabs.png',
      inactive: true,
      name: 'Velocity Labs',
      url: 'http://velocitylabs.io',
    });

    assert.ok(model, 'We can create the record.');
  });
});
