import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';

import { setupApplicationTest } from 'ember-qunit';

import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey/2016', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/survey/2016');
    await waitUntilAllChartsAreDrawn();
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/survey/2016');
    await waitUntilAllChartsAreDrawn();
    await a11yAudit('#ember-testing-container > *', {
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
        'svg-img-alt': {
          enabled: false,
        },
        'landmark-unique': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Ember Community Survey 2016 - Ember.js');
  });
});
