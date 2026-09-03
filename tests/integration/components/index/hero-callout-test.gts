import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexHeroCallout from 'ember-website/components/index/hero-callout';
import { module, test } from 'qunit';

module('Integration | Component | index/hero-callout', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><IndexHeroCallout /></template>);

    assert.dom().hasText('New The 2022 Ember Community Survey is here!');
  });
});
