import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import printf from 'ember-website/helpers/printf';
import { module, test } from 'qunit';

module('Integration | Helper | printf', function (hooks) {
  setupRenderingTest(hooks);

  test('The helper does not error when string is undefined', async function (assert) {
    const instructions = undefined;

    await render(
      <template>
        <div data-test-value>
          {{printf instructions}}
        </div>
      </template>,
    );

    assert.dom('[data-test-value]').hasText('', 'We get the correct value.');
  });

  test('We can substitute %s with another string', async function (assert) {
    const instructions =
      '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s';

    const releaseVersion = '3.25.0-beta.1';

    await render(
      <template>
        <div data-test-value>
          {{printf instructions releaseVersion}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-value]')
      .hasText(
        [
          '# Install Ember 3.25.0-beta.1:',
          '<br>',
          'npm install --save-dev ember-source@~3.25.0-beta.1',
        ].join(' '),
        'We get the correct value.',
      );
  });
});
