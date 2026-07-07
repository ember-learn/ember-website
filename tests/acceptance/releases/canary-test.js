import { visit } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | releases/canary', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/releases/canary');

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/releases/canary');
    await a11yAudit({
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
        'scrollable-region-focusable': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Canary - Releases - Ember.js');
  });
});
