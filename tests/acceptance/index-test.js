import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, skip } from 'qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  /*
    TODO:

    This test results in the `calling set on destroyed object` error.
    It seems to be caused by leaflet.

    For now, until we rewrite how leaflet can be used in an Octane
    setting, let's skip the Percy snapshot.
  */
  skip('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  skip('Accessibility audit', async function (assert) {
    await visit('/');
    await a11yAudit({
      rules: {
        'scrollable-region-focusable': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Ember.js - A framework for ambitious web developers');
  });
});
