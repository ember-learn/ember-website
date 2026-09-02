import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupRenderingTest } from 'ember-qunit';
import Highcharts from 'ember-website/components/highcharts';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module('Integration | Component | highcharts', function (hooks) {
  setupRenderingTest(hooks);

  test('The component renders an svg chart', async function (assert) {
    const chart = {
      highchartsOptions: {},
    };

    await render(<template><Highcharts @chart={{chart}} /></template>);

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-chart] svg')
      .exists({ count: 1 }, 'We see an svg element.');

    await a11yAudit({
      rules: {
        'link-in-text-block': {
          enabled: false,
        },
      },
    });

    assert.ok(true, 'We passed the accessibility audit.');
  });
});
