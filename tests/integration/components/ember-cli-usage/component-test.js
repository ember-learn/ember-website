import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember cli usage', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing if project doesn\'t install with Ember CLI', async function(assert) {
    this.project = { installWithEmberCLI: false };
    await render(hbs`{{ember-cli-usage project=project}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
