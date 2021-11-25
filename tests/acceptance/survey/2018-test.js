import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey/2018', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  test('Percy snapshot', async function (assert) {
    await visit('/survey/2018');
    await waitUntilAllChartsAreDrawn();
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/survey/2018');
    await waitUntilAllChartsAreDrawn();
    await a11yAudit();

    assert.hasPageTitle('Ember Community Survey 2018 - Ember.js');
  });
});
