import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/showcases';
import { module, test } from 'qunit';

module('Unit | Model | showcase', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a showcase project', function (assert) {
    const attributes = getAttributesForId('1');
    const model = this.store.createRecord('showcase', attributes);

    assert.ok(model, 'We can create the record.');
  });
});
