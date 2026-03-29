/* eslint-disable prettier/prettier */
import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | security', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/security');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/security');
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    }
);

    assert.hasPageTitle('Security - Ember.js');
  });
});
