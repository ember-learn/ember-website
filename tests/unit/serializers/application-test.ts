import type ApplicationSerializer from 'ember-website/serializers/application';
import { setupTest } from 'ember-qunit';
import type Tomster from 'ember-website/models/tomster';
import { module, test } from 'qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const serializer = store.serializerFor(
      'application',
    ) as ApplicationSerializer;

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    const store = this.owner.lookup('service:store');

    const record = store.createRecord<Tomster>('tomster', {});
    const serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
