import { setupTest } from 'ember-qunit';
import { getAttributesForId } from 'ember-website/mirage/data/tomsters';
import { module, test } from 'qunit';

module('Unit | Model | tomster', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a Tomster or Zoey mascot (1)', function (assert) {
    const attributes = getAttributesForId('san-diego-zoey');
    const model = this.store.createRecord('tomster', attributes);

    assert.ok(model, 'We can create the record.');
  });

  test('The model can describe a Tomster or Zoey mascot (2)', function (assert) {
    const attributes = getAttributesForId('ember-conf2019');
    const model = this.store.createRecord('tomster', attributes);

    assert.ok(model, 'We can create the record.');
  });
});
