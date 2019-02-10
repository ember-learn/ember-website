import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, skip } from 'qunit';

module('Integration | Component | project listing/beta', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{project-listing/beta}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#project-listing/beta}}
        template block text
      {{/project-listing/beta}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
