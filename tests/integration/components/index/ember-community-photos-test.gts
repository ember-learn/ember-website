import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberCommunityPhotos from 'ember-website/components/index/ember-community-photos';
import { module, test } from 'qunit';

module(
  'Integration | Component | index/ember-community-photos',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We see photos of the Ember community', async function (assert) {
      await render(<template><IndexEmberCommunityPhotos /></template>);

      assert.dom('[data-test-image]').exists({ count: 8 }, 'We see 8 photos.');
    });
  },
);
