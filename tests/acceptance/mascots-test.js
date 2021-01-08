import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | mascots', function(hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function(assert) {
    await visit('/mascots');
    await percySnapshot(assert);

    assert.ok(true);
  });
});
