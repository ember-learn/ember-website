import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberAddonsPanel from 'ember-website/components/index/ember-addons/panel';
import { module, test } from 'qunit';

module('Integration | Component | index/ember-addons/panel', function (hooks) {
  setupRenderingTest(hooks);

  test('We can render a block content', async function (assert) {
    await render(
      <template>
        <IndexEmberAddonsPanel @currentTabId={{0}} @tabId={{0}}>
          Ember Concurrency is an Ember addon...
        </IndexEmberAddonsPanel>
      </template>,
    );

    assert
      .dom('[data-test-panel]')
      .hasAttribute(
        'aria-labelledby',
        'ember-addons-tab-0',
        'We see the correct aria-labelledby.',
      )
      .doesNotHaveAttribute('hidden', '')
      .hasAttribute('id', 'ember-addons-panel-0', 'We see the correct id.')
      .hasAttribute('role', 'tabpanel', 'We see the correct role.')
      .hasAttribute('tabindex', '0', 'We see the correct tabindex.')
      .hasClass('active-tab', 'We see the .active-tab class.')
      .hasText(
        'Ember Concurrency is an Ember addon...',
        'We see the block content.',
      );
  });

  test('We can visually hide a block content', async function (assert) {
    await render(
      <template>
        <IndexEmberAddonsPanel @currentTabId={{2}} @tabId={{0}}>
          Ember Concurrency is an Ember addon...
        </IndexEmberAddonsPanel>
      </template>,
    );

    assert
      .dom('[data-test-panel]')
      .hasAttribute(
        'aria-labelledby',
        'ember-addons-tab-0',
        'We see the correct aria-labelledby.',
      )
      .hasAttribute('hidden', '', 'We see the correct hidden.')
      .hasAttribute('id', 'ember-addons-panel-0', 'We see the correct id.')
      .hasAttribute('role', 'tabpanel', 'We see the correct role.')
      .hasAttribute('tabindex', '0', 'We see the correct tabindex.')
      .doesNotHaveClass(
        'active-tab',
        'We should not see the .active-tab class.',
      )
      .hasText(
        'Ember Concurrency is an Ember addon...',
        'We see the block content.',
      );
  });
});
