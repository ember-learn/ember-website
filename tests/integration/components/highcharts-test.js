import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module('Integration | Component | highcharts', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.chart = {
      highchartsOptions: {},
    };
  });

  test('The component renders an svg chart', async function (assert) {
    await render(hbs`
      <Highcharts
        @chart={{this.chart}}
      />
    `);

    await waitUntilAllChartsAreDrawn();

    assert
      .dom('[data-test-chart] svg')
      .exists({ count: 1 }, 'We see an svg element.');

    await a11yAudit();

    assert.ok(true, 'We passed the accessibility audit.');
  });
});
