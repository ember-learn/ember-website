import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';

import { setupApplicationTest } from 'ember-qunit';

import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey/2020', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/survey/2020');
    await waitUntilAllChartsAreDrawn();
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/survey/2020');
    await waitUntilAllChartsAreDrawn();
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
        'svg-img-alt': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Ember Community Survey 2020 - Ember.js');
  });
});
