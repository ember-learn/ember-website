import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | releases/release', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/releases/release');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/releases/release');
    await a11yAudit();

    assert.hasPageTitle('Stable - Releases - Ember.js');
  });
});
