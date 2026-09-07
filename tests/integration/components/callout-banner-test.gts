import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import CalloutBanner from 'ember-website/components/callout-banner';
import { module, test } from 'qunit';

module('Integration | Component | callout-banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <CalloutBanner>
          I have an announcement to make
        </CalloutBanner>
      </template>,
    );

    assert
      .dom('[data-test-callout-banner]')
      .hasText('I have an announcement to make', 'We see the correct message');
  });

  test('callouts can be made dismissible', async function (assert) {
    await render(
      <template>
        <CalloutBanner @dismissible={{true}}>
          You can dismiss this announcement
        </CalloutBanner>
      </template>,
    );

    assert
      .dom('[data-test-callout-banner]')
      .exists('We see the callout banner.');

    await click('[data-test-button="Close"]');

    assert
      .dom('[data-test-callout-banner]')
      .doesNotExist('The banner hides on close');
  });
});
