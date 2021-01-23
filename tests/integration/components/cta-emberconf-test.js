import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | cta-emberconf', function (hooks) {
  setupRenderingTest(hooks);

  test('Accessibility audit', async function (assert) {
    await render(hbs`
      <CtaEmberconf />
    `);
    await a11yAudit(this.element);

    assert.ok(true);
  });

  test('We see a link to emberconf.com', async function (assert) {
    await render(hbs`
      <CtaEmberconf />
    `);

    assert
      .dom('[data-test-link="EmberConf"]')
      .hasAttribute('href', 'https://emberconf.com/', 'We see the correct URL.')
      .hasText('Watch live at EmberConf.com', 'We see the correct label.');
  });
});
