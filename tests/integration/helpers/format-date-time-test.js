import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | format-date-time', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.releaseDate = new Date('2021-01-07');
  });

  test('The helper does not error when date is undefined', async function (assert) {
    await render(hbs`
      <div data-test-value>
        {{format-date-time}}
      </div>
    `);

    assert
      .dom('[data-test-value]')
      .hasText('Unknown date', 'We get the correct value.');
  });

  test('By default, displays the month and day of the date', async function (assert) {
    await render(hbs`
      <div data-test-value>
        {{format-date-time this.releaseDate}}
      </div>
    `);

    assert
      .dom('[data-test-value]')
      .hasText('Jan 7', 'We get the correct value.');
  });

  test('We can pass a second argument to format the string', async function (assert) {
    await render(hbs`
      <div data-test-value>
        {{format-date-time this.releaseDate "MMMM D, YYYY"}}
      </div>
    `);

    assert
      .dom('[data-test-value]')
      .hasText('January 7, 2021', 'We get the correct value.');
  });
});
