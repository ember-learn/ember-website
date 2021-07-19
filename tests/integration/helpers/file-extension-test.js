import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | file-extension', function (hooks) {
  setupRenderingTest(hooks);

  test('it extracts the file extension', async function (assert) {
    await render(hbs`
      <div data-test-value>
        {{file-extension "some.file.png"}}
      </div>
    `);

    assert
      .dom('[data-test-value]')
      .hasText('png', 'We get the correct file extension.');
  });
});
