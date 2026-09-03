import { visit } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'ember-qunit';
import { assertPageTitle } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | editions/octane', function (hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/editions/octane');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/editions/octane');
    await a11yAudit({
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    });

    assertPageTitle(assert, 'Octane - Editions - Ember.js');
  });
});
