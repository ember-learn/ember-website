import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey/2021', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/survey/2021');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/survey/2021');
    await a11yAudit({
      exclude: [['[data-test-chart]']],
      include: [['#ember-testing-container']],
    });

    assert.hasPageTitle('Ember Community Survey 2021 - Ember.js');
  });
});
