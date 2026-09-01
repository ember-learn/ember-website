import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | index/ember-ecosystem/image',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can render an image with alternate text', async function (assert) {
      await render(hbs`
        <Index::EmberEcosystem::Image
          @alt="JavaScript"
          @backgroundColor="#FAE125"
          @rotateIcon={{true}}
          @src="/images/home/logos/js.svg"
        />
      `);

      assert
        .dom('[data-test-image]')
        .hasAttribute('alt', 'JavaScript', 'We see the correct alternate text.')
        .doesNotHaveAttribute(
          'role',
          '',
          'We should not see the role attribute.'
        )
        .hasAttribute(
          'src',
          '/images/home/logos/js.svg',
          'We see the correct src.'
        );
    });
  }
);
