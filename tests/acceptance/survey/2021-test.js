import { visit } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey/2021', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/survey/2021');

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/survey/2021');
    await a11yAudit('#ember-testing-container > *', {
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Ember Community Survey 2021 - Ember.js');
  });
});
