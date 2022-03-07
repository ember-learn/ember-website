import { click, currentURL, findAll, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-website/mirage/scenarios/default';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupPageTitleTest(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);
  });

  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
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

  test('A user can use the navigation menu', async function (assert) {
    /* BEGIN: Set up custom assertions */
    assert.areParentNavItemsCorrect = (expectedOutput = []) => {
      const parentNavItems = findAll('.navbar-list-item');

      assert.strictEqual(
        parentNavItems.length,
        expectedOutput.length,
        `The user sees ${expectedOutput.length} parent navigation items.`
      );

      if (parentNavItems.length !== expectedOutput.length) {
        return;
      }

      parentNavItems.forEach((parentNavItem, index) => {
        assert
          .dom(parentNavItem)
          .hasText(
            expectedOutput[index].label,
            `The label for the parent navigation item is correct. (${
              index + 1
            })`
          );
      });
    };

    assert.areChildNavItemsCorrect = (
      expectedOutput = [],
      scope = document
    ) => {
      const childNavItems = scope.querySelectorAll(
        '.navbar-dropdown-list-item-link'
      );

      assert.strictEqual(
        childNavItems.length,
        expectedOutput.length,
        `The user sees ${expectedOutput.length} child navigation items.`
      );

      if (childNavItems.length !== expectedOutput.length) {
        return;
      }

      childNavItems.forEach((childNavItem, index) => {
        assert
          .dom(childNavItem)
          .hasText(
            expectedOutput[index].label,
            `The label for the child navigation item is correct. (${index + 1})`
          )
          .hasAttribute(
            'href',
            expectedOutput[index].href,
            `The URL for the child navigation item is correct. (${index + 1})`
          );
      });
    };
    /* END: Set up custom assertions */

    /* BEGIN: Test */
    await visit('/');

    assert.areParentNavItemsCorrect([
      { label: 'Docs' },
      { label: 'Releases' },
      { label: 'Blog' },
      { label: 'Community' },
      { label: 'About' },
    ]);

    // Check child navigation items for Community
    let parentNavItems = findAll('.navbar-list-item');

    assert.areChildNavItemsCorrect([], parentNavItems[3]);

    await click(parentNavItems[3].querySelector('button'));

    assert.areChildNavItemsCorrect(
      [
        { href: '/community', label: 'The Ember Community' },
        { href: '/guidelines', label: 'Guidelines' },
        { href: '/community/black-lives-matter/', label: 'Black Lives Matter' },
        { href: 'https://help-wanted.emberjs.com/', label: 'Help Wanted' },
        { href: '/survey', label: 'Ember Community Survey' },
        { href: 'https://emberconf.com/', label: 'EmberConf' },
        { href: '/community/meetups', label: 'Meetups' },
      ],
      parentNavItems[3]
    );

    // Navigate to another page
    let childNavItems = parentNavItems[3].querySelectorAll(
      '.navbar-dropdown-list-item-link'
    );

    await click(childNavItems[0]);

    assert.strictEqual(
      currentURL(),
      '/community',
      'The user can navigate to /community.'
    );

    assert.hasPageTitle('Community - Ember.js');

    // Check that the dropdown menu closed
    parentNavItems = findAll('.navbar-list-item');

    assert.areChildNavItemsCorrect([], parentNavItems[3]);
    /* END: Test */

    /* BEGIN: Clean up custom assertions */
    delete assert.areParentNavItemsCorrect;
    delete assert.areChildNavItemsCorrect;
    /* END: Clean up custom assertions */
  });
});
