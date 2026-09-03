import type Tomster from 'ember-website/models/tomster';
import { setupTest } from 'ember-website/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | tomster', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<Tomster>('tomster', {});

    assert.ok(model);
  });
});
