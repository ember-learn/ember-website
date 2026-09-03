import { click, focus, render, triggerKeyEvent } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberAddons from 'ember-website/components/index/ember-addons';
import { module, test } from 'qunit';

function assertTabs(assert, expectedOutput = {}) {
  for (const [label, value] of Object.entries(expectedOutput)) {
    assert
      .dom(`[data-test-button="${label}"]`)
      .hasAttribute(
        'aria-selected',
        value ? 'true' : 'false',
        `We see the correct aria-selected for ${label} button.`,
      );
  }
}

module('Integration | Component | index/ember-addons', function (hooks) {
  setupRenderingTest(hooks);

  test('We show 4 Ember addons', async function (assert) {
    await render(<template><IndexEmberAddons /></template>);

    // Check tabs
    assert.dom('[data-test-button]').exists({ count: 4 }, 'We see 4 tabs.');

    assertTabs(assert, {
      'Manage State': true,
      Authenticate: false,
      Translate: false,
      Deploy: false,
    });

    // Check panels
    assert.dom('[data-test-panel]').exists({ count: 4 }, 'We see 4 panels.');

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Ember Concurrency is an Ember addon that makes state management a whole lot easier with useful primitives.',
          'Read the docs: http://ember-concurrency.com/',
          'Easy installation: > ember install ember-concurrency',
        ].join(' '),
        'We see the correct panel on display.',
      );
  });

  test('We can switch tabs with a mouse click', async function (assert) {
    await render(<template><IndexEmberAddons /></template>);
    await click('[data-test-button="Translate"]');

    assertTabs(assert, {
      'Manage State': false,
      Authenticate: false,
      Translate: true,
      Deploy: false,
    });

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Internationalize your Ember apps with an addon that provides support for 150+ languages with locale-aware dates and time formatting.',
          'Read the docs: https://ember-intl.github.io/ember-intl/',
          'Easy installation: > ember install ember-intl',
        ].join(' '),
        'We see the correct panel on display.',
      );

    await click('[data-test-button="Deploy"]');

    assertTabs(assert, {
      'Manage State': false,
      Authenticate: false,
      Translate: false,
      Deploy: true,
    });

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Ember CLI Deploy is a deployment pipeline that keeps your deploy logic maintainable and reusable.',
          'Read the docs: http://ember-cli-deploy.com/',
          'Easy installation: > ember install ember-cli-deploy',
        ].join(' '),
        'We see the correct panel on display.',
      );

    await click('[data-test-button="Authenticate"]');

    assertTabs(assert, {
      'Manage State': false,
      Authenticate: true,
      Translate: false,
      Deploy: false,
    });

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Ember Simple Auth is an Ember addon with minimal requirements, supporting all kinds of authentication and authorization mechanisms.',
          'Read the docs: https://ember-simple-auth.com/',
          'Easy installation: > ember install ember-simple-auth',
        ].join(' '),
        'We see the correct panel on display.',
      );
  });

  test('We can switch tabs with left and right arrow keys', async function (assert) {
    await render(<template><IndexEmberAddons /></template>);
    await focus('[data-test-button="Manage State"]');
    await triggerKeyEvent(
      '[data-test-button="Manage State"]',
      'keydown',
      'ArrowLeft',
    );

    assertTabs(assert, {
      'Manage State': false,
      Authenticate: false,
      Translate: false,
      Deploy: true,
    });

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Ember CLI Deploy is a deployment pipeline that keeps your deploy logic maintainable and reusable.',
          'Read the docs: http://ember-cli-deploy.com/',
          'Easy installation: > ember install ember-cli-deploy',
        ].join(' '),
        'We see the correct panel on display.',
      );

    await triggerKeyEvent(
      '[data-test-button="Manage State"]',
      'keydown',
      'ArrowRight',
    );

    assertTabs(assert, {
      'Manage State': true,
      Authenticate: false,
      Translate: false,
      Deploy: false,
    });

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Ember Concurrency is an Ember addon that makes state management a whole lot easier with useful primitives.',
          'Read the docs: http://ember-concurrency.com/',
          'Easy installation: > ember install ember-concurrency',
        ].join(' '),
        'We see the correct panel on display.',
      );

    await triggerKeyEvent(
      '[data-test-button="Manage State"]',
      'keydown',
      'ArrowRight',
    );

    assertTabs(assert, {
      'Manage State': false,
      Authenticate: true,
      Translate: false,
      Deploy: false,
    });

    assert
      .dom('[data-test-panel]:not([hidden])')
      .exists({ count: 1 }, 'We see only 1 panel on display.')
      .hasText(
        [
          'Ember Simple Auth is an Ember addon with minimal requirements, supporting all kinds of authentication and authorization mechanisms.',
          'Read the docs: https://ember-simple-auth.com/',
          'Easy installation: > ember install ember-simple-auth',
        ].join(' '),
        'We see the correct panel on display.',
      );
  });
});
