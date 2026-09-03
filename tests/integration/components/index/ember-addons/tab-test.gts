import { fn } from '@ember/helper';
import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberAddonsTab from 'ember-website/components/index/ember-addons/tab';
import { module, test } from 'qunit';

module('Integration | Component | index/ember-addons/tab', function (hooks) {
  setupRenderingTest(hooks);

  test('We can render a tab (1)', async function (assert) {
    const noOp = (): void => {};

    await render(
      <template>
        <IndexEmberAddonsTab
          @currentTabId={{0}}
          @label="Manage State"
          @onClick={{noOp}}
          @tabId={{0}}
        />
      </template>,
    );

    assert
      .dom('[data-test-button]')
      .hasAttribute(
        'aria-controls',
        'ember-addons-panel-0',
        'We see the correct aria-controls.',
      )
      .hasAttribute(
        'aria-selected',
        'true',
        'We see the correct aria-selected.',
      )
      .hasAttribute('id', 'ember-addons-tab-0', 'We see the correct id.')
      .hasAttribute('role', 'tab', 'We see the correct role.')
      .hasAttribute('tabindex', '0', 'We see the correct tabindex.')
      .hasClass('active-tab', 'We see the .active-tab class.')
      .hasText('Manage State', 'We see the label.');
  });

  test('We can render a tab (2)', async function (assert) {
    const noOp = (): void => {};

    await render(
      <template>
        <IndexEmberAddonsTab
          @currentTabId={{2}}
          @label="Manage State"
          @onClick={{noOp}}
          @tabId={{0}}
        />
      </template>,
    );

    assert
      .dom('[data-test-button]')
      .hasAttribute(
        'aria-controls',
        'ember-addons-panel-0',
        'We see the correct aria-controls.',
      )
      .hasAttribute(
        'aria-selected',
        'false',
        'We see the correct aria-selected.',
      )
      .hasAttribute('id', 'ember-addons-tab-0', 'We see the correct id.')
      .hasAttribute('role', 'tab', 'We see the correct role.')
      .hasAttribute('tabindex', '-1', 'We see the correct tabindex.')
      .doesNotHaveClass(
        'active-tab',
        'We should not see the .active-tab class.',
      )
      .hasText('Manage State', 'We see the label.');
  });

  test('We can click the button to call @onClick', async function (assert) {
    const updateCurrentTabId = (tabId: number): void => {
      assert.strictEqual(tabId, 0, 'We get the correct tab ID.');

      assert.step('updateCurrentTabId');
    };

    await render(
      <template>
        <IndexEmberAddonsTab
          @currentTabId={{2}}
          @label="Manage State"
          @onClick={{fn updateCurrentTabId 0}}
          @tabId={{0}}
        />
      </template>,
    );

    await click('[data-test-button="Manage State"]');

    assert.verifySteps(['updateCurrentTabId']);
  });
});
