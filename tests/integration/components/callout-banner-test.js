import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | callout-banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <CalloutBanner>
        I have an announcement to make
      </CalloutBanner>
    `);

    assert
      .dom('.callout-banner')
      .exists()
      .hasText('I have an announcement to make');
  });

  test('callouts can be made dismissible', async function (assert) {
    await render(hbs`
      <CalloutBanner @dismissible={{true}}>
        You can dismiss this announcement
      </CalloutBanner>
    `);
    assert.dom('.callout-banner').exists();
    await click('.toggle-close');
    assert.dom('.callout-banner').doesNotExist();
  });
});
