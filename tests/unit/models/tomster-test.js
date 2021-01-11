import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | tomster', function (hooks) {
  setupTest(hooks);

  test('The model can describe a Tomster or Zoey mascot (1)', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('tomster', {
      date: new Date('2016-05-31'),
      id: 'san-diego-zoey',
      image: 'sandiego-zoey.png',
      tags: ['all', 'zoey', 'meetup'],
      title: 'San Diego Zoey',
      url: 'https://www.meetup.com/sandiego-ember/',
    });

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a Tomster or Zoey mascot (2)', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('tomster', {
      date: new Date('2019-03-19'),
      id: 'ember-conf2019',
      image: 'emberconf-2019.png',
      tags: ['all', 'tomster', 'zoey', 'meetup'],
      title: 'EmberConf 2019',
      url: 'https://emberconf.com/',
    });

    assert.ok(model, 'We can create the record.');
  });
});
