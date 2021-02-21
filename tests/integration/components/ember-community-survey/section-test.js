import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { waitUntilAllChartsAreDrawn } from 'ember-website/tests/helpers/highcharts';
import { module, test } from 'qunit';

module(
  'Integration | Component | ember-community-survey/section',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can pass @sectionId and @sectionTitle to create a title and hyperlink', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Section
          @sectionId="closing-thoughts"
          @sectionTitle="Closing Thoughts"
        />
      `);

      assert
        .dom('[data-test-field="Title"]')
        .hasText(
          'Closing Thoughts',
          'We see the correct title for the section.'
        );

      assert
        .dom('[data-test-link="Closing Thoughts"]')
        .hasAttribute(
          'href',
          '#closing-thoughts',
          'We see the correct href for the hyperlink.'
        );

      assert
        .dom('[data-test-container="Charts"]')
        .doesNotExist("We don't see the charts container.");

      assert
        .dom('[data-test-container="Body"]')
        .hasNoText(
          'We would like to thank everyone who took the time to participate in the 2016 Ember Community Survey!',
          "We don't see text in the body."
        );
    });

    test('We can create a section with body only', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Section
          @sectionId="closing-thoughts"
          @sectionTitle="Closing Thoughts"
        >
          <:body>
            <p>
              We would like to thank everyone who took the time to participate in the 2016 Ember Community Survey!
            </p>
          </:body>
        </EmberCommunitySurvey::Section>
      `);

      assert
        .dom('[data-test-container="Charts"]')
        .doesNotExist("We don't see the charts container.");

      assert
        .dom('[data-test-container="Body"]')
        .hasText(
          'We would like to thank everyone who took the time to participate in the 2016 Ember Community Survey!',
          'We see the correct text in the body.'
        );
    });

    test('We can create a section with 1 chart', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Section
          @sectionId="how-likely-to-recommend-ember"
          @sectionTitle="Recommending Ember"
        >
          <:charts>
            <Highcharts />
          </:charts>

          <:body>
            <p>
              Explanation for the chart goes here.
            </p>
          </:body>
        </EmberCommunitySurvey::Section>
      `);

      await waitUntilAllChartsAreDrawn();

      assert
        .dom('[data-test-container="Charts"]')
        .exists('We see the charts container.');

      assert
        .dom('[data-test-highcharts-container]')
        .exists({ count: 1 }, 'We see 1 chart.');

      assert
        .dom('[data-test-container="Body"]')
        .hasText(
          'Explanation for the chart goes here.',
          'We see the correct text in the body.'
        );
    });

    test('We can create a section with 2 charts', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Section
          @sectionId="server-side-development"
          @sectionTitle="Server-side development"
        >
          <:charts>
            <div class="grid lg:grid-2">
              <Highcharts />

              <Highcharts />
            </div>
          </:charts>

          <:body>
            <p>
              Explanation for both charts goes here.
            </p>
          </:body>
        </EmberCommunitySurvey::Section>
      `);

      await waitUntilAllChartsAreDrawn();

      assert
        .dom('[data-test-container="Charts"]')
        .exists('We see the charts container.');

      assert
        .dom('[data-test-highcharts-container]')
        .exists({ count: 2 }, 'We see 2 charts.');

      assert
        .dom('[data-test-container="Body"]')
        .hasText(
          'Explanation for both charts goes here.',
          'We see the correct text in the body.'
        );
    });
  }
);
