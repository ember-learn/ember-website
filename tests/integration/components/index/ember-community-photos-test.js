import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | index/ember-community-photos',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We see photos of the Ember community', async function (assert) {
      await render(hbs`
        <Index::EmberCommunityPhotos />
      `);

      assert.dom('[data-test-image]').exists({ count: 8 }, 'We see 8 photos.');
    });
  }
);
