import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import WindowSvg from 'ember-website/components/window-svg';
import { module, test } from 'qunit';

module('Integration | Component | window-svg', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <WindowSvg>
          <image
            xmlns="http://www.w3.org/2000/svg"
            x="140"
            y="150"
            width="200"
            height="200"
            xlink:href="/images/home/ember-observer.svg"
          />
        </WindowSvg>
      </template>,
    );

    assert.dom().hasText('https://emberobserver.com');
  });
});
