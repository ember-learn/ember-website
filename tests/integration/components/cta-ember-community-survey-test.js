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
          @surveyRoute="ember-community-survey-2020"
          @surveyTitle="2020 Ember Community Survey"
        />
      `);

      assert.dom('[data-test-survey-reminder]').exists();

      assert
        .dom('[data-test-message]')
        .hasText('Take the 2020 Ember Community Survey');

      assert
        .dom('[data-test-link]')
        .hasAttribute(
          'href',
          '/ember-community-survey-2020',
          '2020 Ember Community Survey'
        );
    });

    test('We can click the Close button to hide the survey reminder', async function (assert) {
      await render(hbs`
        <CtaEmberCommunitySurvey
          @surveyRoute="ember-community-survey-2020"
          @surveyTitle="2020 Ember Community Survey"
        />
      `);

      await click('[data-test-button="Close"]');

      assert.dom('[data-test-survey-reminder]').doesNotExist();
    });
  }
);
