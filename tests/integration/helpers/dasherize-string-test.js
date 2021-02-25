import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dasherize-string', function (hooks) {
  setupRenderingTest(hooks);

  test('it dasherizes a string', async function (assert) {
    this.set('string', 'Tertiary Logos');

    await render(hbs`{{dasherize-string this.string}}`);

    assert.equal(this.element.textContent.trim(), 'tertiary-logos');
  });
});
