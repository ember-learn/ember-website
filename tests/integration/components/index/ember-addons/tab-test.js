import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | index/ember-addons/tab', function (hooks) {
  setupRenderingTest(hooks);

  test('We can render a tab (1)', async function (assert) {
    this.noOp = () => {};

    await render(hbs`
      <Index::EmberAddons::Tab
        @currentTabId={{0}}
        @label="Manage State"
        @onClick={{this.noOp}}
        @tabId={{0}}
      />
    `);

    assert
      .dom('[data-test-button]')
      .hasAttribute(
        'aria-controls',
        'ember-addons-panel-0',
        'We see the correct aria-controls.'
      )
      .hasAttribute(
        'aria-selected',
        'true',
        'We see the correct aria-selected.'
      )
      .hasAttribute('id', 'ember-addons-tab-0', 'We see the correct id.')
      .hasAttribute('role', 'tab', 'We see the correct role.')
      .hasAttribute('tabindex', '0', 'We see the correct tabindex.')
      .hasClass('active-tab', 'We see the .active-tab class.')
      .hasText('Manage State', 'We see the label.');
  });

  test('We can render a tab (2)', async function (assert) {
    this.noOp = () => {};

    await render(hbs`
      <Index::EmberAddons::Tab
        @currentTabId={{2}}
        @label="Manage State"
        @onClick={{this.noOp}}
        @tabId={{0}}
      />
    `);

    assert
      .dom('[data-test-button]')
      .hasAttribute(
        'aria-controls',
        'ember-addons-panel-0',
        'We see the correct aria-controls.'
      )
      .hasAttribute(
        'aria-selected',
        'false',
        'We see the correct aria-selected.'
      )
      .hasAttribute('id', 'ember-addons-tab-0', 'We see the correct id.')
      .hasAttribute('role', 'tab', 'We see the correct role.')
      .hasAttribute('tabindex', '-1', 'We see the correct tabindex.')
      .doesNotHaveClass(
        'active-tab',
        'We should not see the .active-tab class.'
      )
      .hasText('Manage State', 'We see the label.');
  });

  test('We can click the button to call @onClick', async function (assert) {
    assert.expect(1);

    this.updateCurrentTabId = (tabId) => {
      assert.strictEqual(tabId, 0, 'We get the correct tab ID.');
    };

    await render(hbs`
      <Index::EmberAddons::Tab
        @currentTabId={{2}}
        @label="Manage State"
        @onClick={{fn this.updateCurrentTabId 0}}
        @tabId={{0}}
      />
    `);

    await click('[data-test-button="Manage State"]');
  });
});
