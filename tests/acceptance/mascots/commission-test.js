import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | mascots/commission', function (hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/mascots/commission');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/mascots/commission');
    await a11yAudit({
      rules: {
        'color-contrast': {
          enabled: false,
        },
        label: {
          enabled: false,
        },
      },
    });

    assert.ok(true);
  });
});
