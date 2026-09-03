import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupRenderingTest } from 'ember-qunit';
import CtaEmberconf from 'ember-website/components/cta-emberconf';
import { module, test } from 'qunit';

module('Integration | Component | cta-emberconf', function (hooks) {
  setupRenderingTest(hooks);

  test('Accessibility audit', async function (assert) {
    await render(<template><CtaEmberconf /></template>);
    await a11yAudit();

    assert.ok(true);
  });

  test('We see a link to emberconf.com', async function (assert) {
    await render(<template><CtaEmberconf /></template>);

    assert
      .dom('[data-test-link="EmberConf"]')
      .hasAttribute('href', 'https://emberconf.com/', 'We see the correct URL.')
      .hasText('Watch live at EmberConf.com', 'We see the correct label.');
  });
});
