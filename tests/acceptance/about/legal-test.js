import { visit } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | about/legal', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/about/legal');

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/about/legal');
    await a11yAudit({
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Legal - Ember.js');
  });
});
