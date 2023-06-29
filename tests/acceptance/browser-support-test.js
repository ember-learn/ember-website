import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | browser-support', function (hooks) {
  setupApplicationTest(hooks);
  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/browser-support');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/browser-support');
    await a11yAudit();

    assert.hasPageTitle('Browser Support - Ember.js');
  });
});
