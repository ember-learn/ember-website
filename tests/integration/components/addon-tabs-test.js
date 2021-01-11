import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, focus, render, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | addon-tabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it activates a tab when clicking on it', async function (assert) {
    await render(hbs`<AddonTabs />`);
    let firstTab = assert.dom('#addon-tab-0');
    let firstPanel = assert.dom('#addon-panel-0');

    let secondTab = assert.dom('#addon-tab-1');
    let secondPanel = assert.dom('#addon-panel-1');

    firstTab.hasAttribute('aria-selected', 'true');
    firstPanel.doesNotHaveAttribute('hidden');

    secondTab.hasAttribute('aria-selected', 'false');
    secondPanel.hasAttribute('hidden');

    await click('#addon-tab-1');

    firstTab.hasAttribute('aria-selected', 'false');
    firstPanel.hasAttribute('hidden');

    secondTab.hasAttribute('aria-selected', 'true');
    secondPanel.doesNotHaveAttribute('hidden');
  });

  test("it's possible to change the active tab by pressing the arrow keys when focused on the currently active tab", async function (assert) {
    await render(hbs`<AddonTabs />`);

    let totalTabs = this.element.querySelectorAll('[role=tab]').length;
    let firstTabSelector = `#addon-tab-0`;
    let lastTabSelector = `#addon-tab-${totalTabs - 1}`;
    let firstTab = assert.dom(firstTabSelector);
    let lastTab = assert.dom(lastTabSelector);

    await focus(firstTabSelector);

    await triggerKeyEvent(firstTabSelector, 'keydown', 'ArrowLeft');
    lastTab.isFocused();
    lastTab.hasAttribute('aria-selected', 'true');
    firstTab.hasAttribute('aria-selected', 'false');

    await triggerKeyEvent(lastTabSelector, 'keydown', 'ArrowRight');
    firstTab.isFocused();
    firstTab.hasAttribute('aria-selected', 'true');
    lastTab.hasAttribute('aria-selected', 'false');
  });
});
