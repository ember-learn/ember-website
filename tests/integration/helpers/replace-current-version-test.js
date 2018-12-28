import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | replace-current-version', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 'ONE _CURRENT_VERSION_ TWO');

    await render(hbs`{{replace-current-version inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'ONE 3.6 TWO');
  });
});
