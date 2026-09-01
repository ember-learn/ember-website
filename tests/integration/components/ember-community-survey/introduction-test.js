import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | ember-community-survey/introduction',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can pass @surveyLogoAlt and @surveyLogoSrc', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Introduction
          @surveyLogoAlt="Ember Community Survey 2016"
          @surveyLogoSrc="/images/survey/logo.png"
        />
      `);

      assert
        .dom('[data-test-image="Survey Logo"]')
        .hasAttribute(
          'alt',
          'Ember Community Survey 2016',
          'We see the correct alt for the image.'
        )
        .hasAttribute(
          'src',
          '/images/survey/logo.png',
          'We see the correct src for the image.'
        );

      assert
        .dom('[data-test-section="Introduction"]')
        .hasNoText("We don't see text in the introduction.");
    });

    test('We can render a block content', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Introduction
          @surveyLogoAlt="Ember Community Survey 2016"
          @surveyLogoSrc="/images/survey/logo.png"
        >
          <p>
            A project to learn who is using Ember and how.
          </p>
          <p>
            With over 1800 responses, here are the 2016 survey results!
          </p>
        </EmberCommunitySurvey::Introduction>
      `);

      assert
        .dom('[data-test-image="Survey Logo"]')
        .hasAttribute(
          'alt',
          'Ember Community Survey 2016',
          'We see the correct alt for the image.'
        )
        .hasAttribute(
          'src',
          '/images/survey/logo.png',
          'We see the correct src for the image.'
        );

      assert
        .dom('[data-test-section="Introduction"]')
        .hasText(
          'A project to learn who is using Ember and how. With over 1800 responses, here are the 2016 survey results!',
          'We see the correct text in the introduction.'
        );
    });
  }
);
