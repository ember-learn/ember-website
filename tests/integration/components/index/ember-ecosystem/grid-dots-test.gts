import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberEcosystemGridDots from 'ember-website/components/index/ember-ecosystem/grid-dots';
import { module, test } from 'qunit';

module(
  'Integration | Component | index/ember-ecosystem/grid-dots',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      await render(<template><IndexEmberEcosystemGridDots /></template>);

      assert.dom('svg').exists();
    });
  },
);
