import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, skip } from 'qunit';

module('Acceptance | ember-community-survey-2019', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  /*
    TODO:

    This test results in the `calling set on destroyed object` error.
    It seems to be caused by highcharts.

    In addition, the Percy snapshot has been flakey for a while. Often,
    a new pull request would result in charts not being rendered. As a
    result, Percy would mark the snapshot as different even though the
    pull request didn't modify the route.

    For now, until we rewrite how highcharts can be used in an Octane
    setting, let's skip the Percy snapshot.
  */
  skip('Percy snapshot', async function (assert) {
    await visit('/ember-community-survey-2019');
    await percySnapshot(assert);

    assert.ok(true);
  });

  skip('Accessibility audit', async function (assert) {
    await visit('/ember-community-survey-2019');
    await a11yAudit();

    assert.hasPageTitle('Community Survey 2019 - Ember.js');
  });
});
