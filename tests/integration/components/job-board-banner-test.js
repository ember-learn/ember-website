import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | job-board-banner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('showBanner', true);

    await render(hbs`{{job-board-banner showBanner=showBanner}}`);

    assert.equal(this.element.querySelector('.job-board-banner').innerHTML.trim(), 'Post and find jobs on the Ember job board');
  });
});
