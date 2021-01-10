import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | showcase', function(hooks) {
  setupTest(hooks);

  test('The model can describe a showcase project', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('showcase', {
      demo: 'https://ember-learn-super-rentals.herokuapp.com/',
      features: [
        'Basic routing, and routing with dynamic segments',
        'Acceptance, integration, and unit tests using <a href="http://www.ember-cli-mirage.com/">Ember CLI Mirage</a>.',
      ],
      html: `<p>If you've gone through our <a href="https://guides.emberjs.com/release/tutorial/">tutorial</a> you will already be familiar with this application! <strong>Super Rentals</strong> is a good starter project to get acclimated to the Ember.js way of doing things. In this repository you'll be able to see:</p>`,
      id: '1',
      image: {
        alt: 'Super Rentals tutorial application',
        src: 'super-rentals.png',
      },
      name: 'Super Rentals',
      repository: 'https://github.com/ember-learn/super-rentals',
    });

    assert.ok(model, 'We can create the record.');
  });
});
