import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | releases/lts', function (hooks) {
  setupApplicationTest(hooks);
  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/releases/lts');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/releases/lts');
    await a11yAudit({
      rules: {
        'heading-order': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('LTS - Releases - Ember.js');
  });
});
