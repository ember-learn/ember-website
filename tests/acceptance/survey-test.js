import { currentURL, visit } from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('When a user visits /survey, we redirect them to the most recent survey page', async function (assert) {
    await visit('/survey');

    assert.strictEqual(currentURL(), '/survey/2024', 'The URL is correct.');

    assert.hasPageTitle('Ember Community Survey 2024 - Ember.js');
  });
});
