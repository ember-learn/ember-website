import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | team member', function (hooks) {
  setupTest(hooks);

  test('The model can describe a person that belongs to 1 team', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('team-member', {
      added: new Date('2020-06-18'),
      first: 'Isaac',
      github: 'https://github.com/ijlee2',
      id: 'isaac-lee',
      image: 'ilee.jpg',
      last: 'Lee',
      name: 'Isaac Lee',
      teams: ['learning'],
      twitter: null,
    });

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a person that belongs to multiple teams', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('team-member', {
      added: new Date('2016-04-14'),
      first: 'Katie',
      github: 'https://github.com/kategengler',
      id: 'katie-gengler',
      image: 'kgengler.jpg',
      last: 'Gengler',
      name: 'Katie Gengler',
      teams: ['corejs', 'cli', 'steering'],
      twitter: 'https://twitter.com/katiegengler',
    });

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a person who is an alumnus or alumna', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('team-member', {
      added: new Date('2013-04-02'),
      first: 'Trek',
      github: 'https://github.com/trek',
      id: 'trek-glowacki',
      image: 'tglowacki.jpg',
      last: 'Glowacki',
      name: 'Trek Glowacki',
      teams: ['alumni'],
      twitter: 'https://twitter.com/trek',
    });

    assert.ok(model, 'We can create the record.');
  });
});
