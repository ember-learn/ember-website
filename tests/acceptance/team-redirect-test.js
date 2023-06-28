import { currentURL, visit } from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | team redirect', function (hooks) {
  setupApplicationTest(hooks);

  setupPageTitleTest(hooks);

  test('When a user visits /team, we redirect them to /teams', async function (assert) {
    await visit('/team');

    assert.strictEqual(currentURL(), '/teams', 'The URL is correct.');

    assert.hasPageTitle('Team - Ember.js');
  });
});
