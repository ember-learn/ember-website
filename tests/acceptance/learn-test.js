import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | learn', function(hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function(assert) {
    await visit('/learn');
    await percySnapshot(assert);

    assert.ok(true);
  });
});
