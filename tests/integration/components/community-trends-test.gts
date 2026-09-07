import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import CommunityTrends from 'ember-website/components/community-trends';
import { module, test } from 'qunit';

module('Integration | Component | community-trends', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><CommunityTrends /></template>);

    assert.dom('img').doesNotExist();
  });
});
