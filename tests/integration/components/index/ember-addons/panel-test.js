import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | index/ember-addons/panel', function (hooks) {
  setupRenderingTest(hooks);

  test('We can render a block content', async function (assert) {
    await render(hbs`
      <Index::EmberAddons::Panel
        @currentTabId={{0}}
        @tabId={{0}}
      >
        Ember Concurrency is an Ember addon...
      </Index::EmberAddons::Panel>
    `);

    assert
      .dom('[data-test-panel]')
      .hasAttribute(
        'aria-labelledby',
        'ember-addons-tab-0',
        'We see the correct aria-labelledby.'
      )
      .doesNotHaveAttribute(
        'hidden',
        '',
        'We should not see the hidden attribute.'
      )
      .hasAttribute('id', 'ember-addons-panel-0', 'We see the correct id.')
      .hasAttribute('role', 'tabpanel', 'We see the correct role.')
      .hasAttribute('tabindex', '0', 'We see the correct tabindex.')
      .hasClass('active-tab', 'We see the .active-tab class.')
      .hasText(
        'Ember Concurrency is an Ember addon...',
        'We see the block content.'
      );
  });

  test('We can visually hide a block content', async function (assert) {
    await render(hbs`
      <Index::EmberAddons::Panel
        @currentTabId={{2}}
        @tabId={{0}}
      >
        Ember Concurrency is an Ember addon...
      </Index::EmberAddons::Panel>
    `);

    assert
      .dom('[data-test-panel]')
      .hasAttribute(
        'aria-labelledby',
        'ember-addons-tab-0',
        'We see the correct aria-labelledby.'
      )
      .hasAttribute('hidden', '', 'We see the correct hidden.')
      .hasAttribute('id', 'ember-addons-panel-0', 'We see the correct id.')
      .hasAttribute('role', 'tabpanel', 'We see the correct role.')
      .hasAttribute('tabindex', '0', 'We see the correct tabindex.')
      .doesNotHaveClass(
        'active-tab',
        'We should not see the .active-tab class.'
      )
      .hasText(
        'Ember Concurrency is an Ember addon...',
        'We see the block content.'
      );
  });
});
