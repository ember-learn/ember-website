import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | ember-community-survey-2018', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  test('Percy snapshot', async function (assert) {
    await visit('/ember-community-survey-2018');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/ember-community-survey-2018');
    await a11yAudit({
      rules: {
        'heading-order': {
          enabled: false,
        },
        'landmark-complementary-is-top-level': {
          enabled: false,
        },
        'landmark-unique': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Community Survey 2018 - Ember.js');
  });
});
