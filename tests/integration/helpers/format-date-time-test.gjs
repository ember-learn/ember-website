import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import formatDateTime from 'ember-website/helpers/format-date-time';
import { module, test } from 'qunit';

module('Integration | Helper | format-date-time', function (hooks) {
  setupRenderingTest(hooks);

  test('The helper does not error when date is undefined', async function (assert) {
    const releaseDate = undefined;

    await render(
      <template>
        <div data-test-value>
          {{formatDateTime releaseDate}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-value]')
      .hasText('Unknown date', 'We get the correct value.');
  });

  test('By default, displays the month and day of the date', async function (assert) {
    const releaseDate = new Date('2021-01-07');

    await render(
      <template>
        <div data-test-value>
          {{formatDateTime releaseDate}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-value]')
      .hasText('Jan 7', 'We get the correct value.');
  });

  test('We can pass a second argument to format the string', async function (assert) {
    const releaseDate = new Date('2021-01-07');

    await render(
      <template>
        <div data-test-value>
          {{formatDateTime releaseDate "MMMM D, YYYY"}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-value]')
      .hasText('January 7, 2021', 'We get the correct value.');
  });
});
