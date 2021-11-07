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
          @surveyTitle="Community Survey 2020"
        />
      `);

      assert.dom('[data-test-survey-reminder]').exists();

      assert
        .dom('[data-test-message]')
        .hasText('Take the Community Survey 2020');

      assert
        .dom('[data-test-link]')
        .hasAttribute('href', '/survey/results-2020', 'Community Survey 2020');
    });

    test('We can click the Close button to hide the survey reminder', async function (assert) {
      await render(hbs`
        <CtaEmberCommunitySurvey
          @surveyRoute="/survey/results-2020"
          @surveyTitle="Community Survey 2020"
        />
      `);

      await click('[data-test-button="Close"]');

      assert.dom('[data-test-survey-reminder]').doesNotExist();
    });
  }
);
