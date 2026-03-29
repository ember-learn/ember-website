/* eslint-disable prettier/prettier */
import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | community/meetups getting started', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/community/meetups-getting-started');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/community/meetups-getting-started');
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    }
);

    assert.hasPageTitle('Getting Started - Community - Ember.js');
  });
});
