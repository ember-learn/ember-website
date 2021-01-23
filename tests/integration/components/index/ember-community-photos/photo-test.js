import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | index/ember-community-photos/photo',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can display an image with alternate text', async function (assert) {
      await render(hbs`
        <Index::EmberCommunityPhotos::Photo
          @alt="Ember core team members gather around the Ember sign at EmberConf"
          @containerClass="homepage-image-grid__img-short"
          @src="/images/community/tinified/EmberConf19-13.jpg"
        />
      `);

      assert
        .dom('[data-test-image]')
        .hasAttribute(
          'alt',
          'Ember core team members gather around the Ember sign at EmberConf',
          'We see the correct alternate text.'
        )
        .doesNotHaveAttribute(
          'role',
          '',
          'We should not see the role attribute.'
        )
        .hasAttribute(
          'src',
          '/images/community/tinified/EmberConf19-13.jpg',
          'We see the correct src.'
        );
    });

    test('We can display an image that is presentational', async function (assert) {
      await render(hbs`
        <Index::EmberCommunityPhotos::Photo
          @containerClass="homepage-image-grid__img-tall-bottom"
          @src="/images/community/zoey.png"
        />
      `);

      assert
        .dom('[data-test-image]')
        .hasAttribute('alt', '', 'We see the correct alternate text.')
        .hasAttribute('role', 'presentation', 'We see the correct role.')
        .hasAttribute(
          'src',
          '/images/community/zoey.png',
          'We see the correct src.'
        );
    });
  }
);
