import Service from '@ember/service';
import { click, currentURL, findAll, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { assertPageTitle } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

function assertParentNavItems(
  assert: Assert,
  expectedOutput: { label: string }[] = [],
): void {
  const parentNavItems = findAll('.navbar-list-item');

  assert.strictEqual(
    parentNavItems.length,
    expectedOutput.length,
    `The user sees ${expectedOutput.length} parent navigation items.`,
  );

  if (parentNavItems.length !== expectedOutput.length) {
    return;
  }

  parentNavItems.forEach((parentNavItem, index) => {
    assert
      .dom(parentNavItem)
      .hasText(
        expectedOutput[index]!.label,
        `The label for the parent navigation item is correct. (${index + 1})`,
      );
  });
}

function assertChildNavItems(
  assert: Assert,
  expectedOutput: { href: string; label: string }[] = [],
  scope: Document | Element = document,
): void {
  const childNavItems = scope.querySelectorAll(
    '.navbar-dropdown-list-item-link',
  );

  assert.strictEqual(
    childNavItems.length,
    expectedOutput.length,
    `The user sees ${expectedOutput.length} child navigation items.`,
  );

  if (childNavItems.length !== expectedOutput.length) {
    return;
  }

  childNavItems.forEach((childNavItem, index) => {
    assert
      .dom(childNavItem)
      .hasText(
        expectedOutput[index]!.label,
        `The label for the child navigation item is correct. (${index + 1})`,
      )
      .hasAttribute(
        'href',
        expectedOutput[index]!.href,
        `The URL for the child navigation item is correct. (${index + 1})`,
      );
  });
}

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/');
    await a11yAudit({
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
        'color-contrast': {
          /**
           * Disabled because ember-styleguide was released without checking what
           * this website is doing.
           * (or a11y/axe targets changed in floating deps or something)
           */
          enabled: false,
        },
        'scrollable-region-focusable': {
          enabled: false,
        },
      },
    });

    assertPageTitle(
      assert,
      'Ember.js - A framework for ambitious web developers',
    );
  });

  test('We track the visit', async function (assert) {
    this.owner.register(
      'service:metrics',
      class MetricsService extends Service {
        activateAdapters(): void {
          assert.step('activateAdapters');
        }

        trackPage(trackData: Record<string, unknown>): void {
          assert.deepEqual(trackData, {
            hostname: 'www.emberjs.com',
            page: '/',
            title: 'index',
          });

          assert.step('trackPage');
        }
      },
    );

    await visit('/');

    assert.verifySteps(['trackPage']);

    // @ts-expect-error: Incorrect type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.owner.unregister('service:metrics');
  });

  test('A user can use the navigation menu', async function (assert) {
    await visit('/');

    assertParentNavItems(assert, [
      { label: 'Docs' },
      { label: 'Releases' },
      { label: 'Blog' },
      { label: 'Community' },
      { label: 'About' },
    ]);

    // Check child navigation items for Community
    let parentNavItems = findAll('.navbar-list-item');

    assertChildNavItems(assert, [], parentNavItems[3]);

    await click(parentNavItems[3]!.querySelector('button')!);

    assertChildNavItems(
      assert,
      [
        { href: '/community', label: 'The Ember Community' },
        { href: '/guidelines', label: 'Guidelines' },
        { href: '/community/black-lives-matter/', label: 'Black Lives Matter' },
        { href: 'https://help-wanted.emberjs.com/', label: 'Help Wanted' },
        { href: '/survey', label: 'Ember Community Survey' },
        { href: 'https://emberconf.com/', label: 'EmberConf' },
        { href: '/community/meetups', label: 'Meetups' },
      ],
      parentNavItems[3],
    );

    // Navigate to another page
    const childNavItems = parentNavItems[3]!.querySelectorAll(
      '.navbar-dropdown-list-item-link',
    );

    await click(childNavItems[0]!);

    assert.strictEqual(
      currentURL(),
      '/community',
      'The user can navigate to /community.',
    );

    assertPageTitle(assert, 'Community - Ember.js');

    // Check that the dropdown menu closed
    parentNavItems = findAll('.navbar-list-item');

    assertChildNavItems(assert, [], parentNavItems[3]);
  });
});
