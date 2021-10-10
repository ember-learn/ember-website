import { currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | survey', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  test('When a user visits /survey, we redirect them to /survey/2021', async function (assert) {
    await visit('/survey');

    assert.strictEqual(
      currentURL(),
      '/survey/results-2021',
      'The URL is correct.'
    );

    assert.hasPageTitle('Ember Community Survey - Ember.js');
  });
});
