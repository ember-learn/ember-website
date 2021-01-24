import { click, currentURL, findAll, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | mascots', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  test('Percy snapshot', async function (assert) {
    await visit('/mascots');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/mascots');
    await a11yAudit();

    assert.hasPageTitle('Mascots - Ember.js');
  });

  test('A user can visit the Mascots page', async function (assert) {
    await visit('/mascots');

    assert.strictEqual(currentURL(), '/mascots', 'The URL is correct.');

    const mascots = findAll('[data-test-mascot]');

    assert.strictEqual(mascots.length, 10, 'The user sees 10 mascots.');

    assert
      .dom('[data-test-field="Name"]', mascots[0])
      .hasText('Minnesota', 'The user sees the correct first mascot.');

    assert
      .dom('[data-test-field="Name"]', mascots[mascots.length - 1])
      .hasText('Teaching Tomster', 'The user sees the correct last mascot.');
  });

  test('A user can filter mascots', async function (assert) {
    await visit('/mascots');
    await click('[data-test-link="Tomsters"]');

    assert.strictEqual(
      currentURL(),
      '/mascots?filter=tomster',
      'The URL is correct.'
    );

    let mascots = findAll('[data-test-mascot]');

    assert.strictEqual(mascots.length, 7, 'The user sees 7 mascots.');

    assert
      .dom('[data-test-field="Name"]', mascots[0])
      .hasText('Minnesota', 'The user sees the correct first mascot.');

    assert
      .dom('[data-test-field="Name"]', mascots[mascots.length - 1])
      .hasText('Teaching Tomster', 'The user sees the correct last mascot.');

    // Try another filter
    await click('[data-test-link="Zoeys"]');

    assert.strictEqual(
      currentURL(),
      '/mascots?filter=zoey',
      'The URL is correct.'
    );

    mascots = findAll('[data-test-mascot]');

    assert.strictEqual(mascots.length, 6, 'The user sees 6 mascots.');

    assert
      .dom('[data-test-field="Name"]', mascots[0])
      .hasText('Ember Octane', 'The user sees the correct first mascot.');

    assert
      .dom('[data-test-field="Name"]', mascots[mascots.length - 1])
      .hasText('Skylight', 'The user sees the correct last mascot.');
  });

  test('A user can change the size of mascots', async function (assert) {
    await visit('/mascots');
    await click('[data-test-link="Tomsters"]');
    await click('[data-test-link="Large"]');

    assert.strictEqual(
      currentURL(),
      '/mascots?display=large&filter=tomster',
      'The URL is correct.'
    );

    let mascots = findAll('[data-test-mascot]');

    assert.strictEqual(mascots.length, 7, 'The user sees 7 mascots.');

    assert
      .dom('[data-test-field="Name"]', mascots[0])
      .hasText('Minnesota', 'The user sees the correct first mascot.');

    assert
      .dom('[data-test-field="Name"]', mascots[mascots.length - 1])
      .hasText('Teaching Tomster', 'The user sees the correct last mascot.');

    await percySnapshot(assert);

    // Try another filter
    await click('[data-test-link="Zoeys"]');
    await click('[data-test-link="Small"]');

    assert.strictEqual(
      currentURL(),
      '/mascots?filter=zoey',
      'The URL is correct.'
    );

    mascots = findAll('[data-test-mascot]');

    assert.strictEqual(mascots.length, 6, 'The user sees 6 mascots.');

    assert
      .dom('[data-test-field="Name"]', mascots[0])
      .hasText('Ember Octane', 'The user sees the correct first mascot.');

    assert
      .dom('[data-test-field="Name"]', mascots[mascots.length - 1])
      .hasText('Skylight', 'The user sees the correct last mascot.');
  });
});
