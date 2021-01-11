import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | releases/canary', function (hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/releases/canary');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/releases/canary');
    await a11yAudit({
      rules: {
        'heading-order': {
          enabled: false,
        },
        'scrollable-region-focusable': {
          enabled: false,
        },
      },
    });

    assert.ok(true);
  });
});
