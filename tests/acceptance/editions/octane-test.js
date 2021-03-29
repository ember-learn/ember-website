import { visit } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import percySnapshot from '@percy/ember';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | editions/octane', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  test('Percy snapshot', async function (assert) {
    await visit('/editions/octane');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/editions/octane');
    await a11yAudit();

    assert.hasPageTitle('Octane - Editions - Ember.js');
  });
});
