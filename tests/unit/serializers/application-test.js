import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('tomster', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
