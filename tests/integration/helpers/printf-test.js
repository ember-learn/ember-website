import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | printf', function (hooks) {
  setupRenderingTest(hooks);

  test('The helper does not error when string is undefined', async function (assert) {
    await render(hbs`
      <div data-test-value>
        {{printf}}
      </div>
    `);

    assert.dom('[data-test-value]').hasText('', 'We get the correct value.');
  });

  test('We can substitute %s with another string', async function (assert) {
    this.instructions =
      '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s';
    this.releaseVersion = '3.25.0-beta.1';

    await render(hbs`
      <div data-test-value>
        {{printf this.instructions this.releaseVersion}}
      </div>
    `);

    assert
      .dom('[data-test-value]')
      .hasText(
        [
          '# Install Ember 3.25.0-beta.1:',
          '<br>',
          'npm install --save-dev ember-source@~3.25.0-beta.1',
        ].join(' '),
        'We get the correct value.'
      );
  });
});
