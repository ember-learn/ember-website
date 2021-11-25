import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | cta-ember-community-survey',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can display a survey reminder', async function (assert) {
      await render(hbs`
        <CtaEmberCommunitySurvey
          @surveyRoute="survey.2020"
          @surveyTitle="2020 Ember Community Survey"
        />
      `);

      assert
        .dom('[data-test-message]')
        .hasText(
          'Take the 2020 Ember Community Survey',
          'We see the message, asking them to take the survey.'
        );

      assert
        .dom('[data-test-link="2020 Ember Community Survey"]')
        .hasAttribute('href', '/survey/2020', 'We see the correct link.');

      assert
        .dom('[data-test-button="Close"]')
        .exists({ count: 1 }, 'We see the Close button.');
    });

    test('We can click the Close button to hide the survey reminder', async function (assert) {
      await render(hbs`
        <CtaEmberCommunitySurvey
          @surveyRoute="survey.2020"
          @surveyTitle="2020 Ember Community Survey"
        />
      `);

      await click('[data-test-button="Close"]');

      assert
        .dom('[data-test-message]')
        .doesNotExist(
          'We do not see the message, asking them to take the survey.'
        );
    });
  }
);
