import type Showcase from 'ember-website/models/showcase';
import { setupTest } from 'ember-website/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | showcase', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<Showcase>('showcase', {});

    assert.ok(model);
  });
});
