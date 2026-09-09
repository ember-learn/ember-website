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
            height="200"
            width="200"
            x="140"
            xlink:href="/images/home/ember-observer.svg"
            xmlns="http://www.w3.org/2000/svg"
            y="150"
          />
        </WindowSvg>
      </template>,
    );

    assert.dom().hasText('https://emberobserver.com');
  });
});
