import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | terminal-code', function (hooks) {
  setupRenderingTest(hooks);

  test('We can render code', async function (assert) {
    await render(hbs`
      <TerminalCode>
        npm install -g ember-cli
        <br>
        ember new my-app-name
      </TerminalCode>
    `);

    assert
      .dom('[data-test-terminal-code]')
      .hasText(
        ['npm install -g ember-cli', 'ember new my-app-name'].join(' '),
        'We see the code.'
      );
  });
});
