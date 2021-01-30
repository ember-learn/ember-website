import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | ember-community-survey/conclusion',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can render a block content', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Conclusion
          @hasDarkBackground={{true}}
        >
          <p>
            We would like to thank everyone who took the time to participate in the 2016 Ember Community Survey!
          </p>
        </EmberCommunitySurvey::Conclusion>
      `);

      assert
        .dom('[data-test-section="Conclusion"]')
        .hasText(
          'We would like to thank everyone who took the time to participate in the 2016 Ember Community Survey!',
          'We see the correct text in the conclusion.'
        );
    });
  }
);
