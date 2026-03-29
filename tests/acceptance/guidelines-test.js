/* eslint-disable prettier/prettier */
import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | guidelines', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/guidelines');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/guidelines');
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    }
);

    assert.hasPageTitle('Community Guidelines - Ember.js');
  });
});
