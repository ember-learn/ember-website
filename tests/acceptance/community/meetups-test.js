/* eslint-disable prettier/prettier */
import { visit } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | community/meetups', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/community/meetups');

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/community/meetups');
    await a11yAudit({
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    }
);

    assert.hasPageTitle('Meetups - Community - Ember.js');
  });
});
