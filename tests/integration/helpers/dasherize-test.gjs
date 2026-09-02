import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import dasherize from 'ember-website/helpers/dasherize';
import { module, test } from 'qunit';

module('Integration | Helper | dasherize', function (hooks) {
  setupRenderingTest(hooks);

  /**
   * This doesn't need comprehensive tests for the output of the dasherzie function
   * since it's just using @ember/string under the hood. This is just a smoke test
   * to make sure it's hooked up correctly
   */
  test('it renders', async function (assert) {
    const inputValue = 'Something Awesome';

    await render(<template>{{dasherize inputValue}}</template>);

    assert.dom(this.element).hasText('something-awesome');
  });
});
