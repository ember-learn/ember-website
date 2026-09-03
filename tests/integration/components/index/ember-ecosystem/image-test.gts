import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import IndexEmberEcosystemImage from 'ember-website/components/index/ember-ecosystem/image';
import { module, test } from 'qunit';

module(
  'Integration | Component | index/ember-ecosystem/image',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can render an image with alternate text', async function (assert) {
      await render(
        <template>
          <IndexEmberEcosystemImage
            @alt="JavaScript"
            @backgroundColor="#FAE125"
            @rotateIcon={{true}}
            @src="/images/home/logos/js.svg"
          />
        </template>,
      );

      assert
        .dom('[data-test-image]')
        .hasAttribute('alt', 'JavaScript', 'We see the correct alternate text.')
        .doesNotHaveAttribute('role', '')
        .hasAttribute(
          'src',
          '/images/home/logos/js.svg',
          'We see the correct src.',
        );
    });
  },
);
