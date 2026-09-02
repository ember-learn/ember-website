import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import htmlSafe from 'ember-website/helpers/html-safe';
import { module, test } from 'qunit';

module('Integration | Helper | html-safe', function (hooks) {
  setupRenderingTest(hooks);

  test('The helper does not error when HTML code is undefined', async function (assert) {
    const htmlCode = undefined;

    await render(
      <template>
        <div data-test-value>
          {{htmlSafe htmlCode}}
        </div>
      </template>,
    );

    assert.dom('[data-test-value]').hasText('', 'We get the correct value.');
  });

  test('We can render an HTML code', async function (assert) {
    const htmlCode = `<p>If you've gone through our <a data-test-link href="https://guides.emberjs.com/release/tutorial/">tutorial</a> you will already be familiar with this application! <strong>Super Rentals</strong> is a good starter project to get acclimated to the Ember.js way of doing things. In this repository you'll be able to see:</p>`;

    await render(
      <template>
        <div>
          {{htmlSafe htmlCode}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-link]')
      .hasAttribute(
        'href',
        'https://guides.emberjs.com/release/tutorial/',
        'We see the correct URL for the link.',
      )
      .hasText('tutorial', 'We see the correct description for the link.');
  });
});
