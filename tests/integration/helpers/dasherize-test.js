import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dasherize', function (hooks) {
  setupRenderingTest(hooks);

  /**
   * This doesn't need comprehensive tests for the output of the dasherzie function
   * since it's just using @ember/string under the hood. This is just a smoke test
   * to make sure it's hooked up correctly
   */
  test('it renders', async function (assert) {
    this.set('inputValue', 'Something Awesome');

    await render(hbs`{{dasherize this.inputValue}}`);

    assert.dom(this.element).hasText('something-awesome');
  });
});
