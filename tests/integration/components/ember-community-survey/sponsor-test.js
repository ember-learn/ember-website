import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | ember-community-survey/sponsor',
  function (hooks) {
    setupRenderingTest(hooks);

    test('We can pass @sponsor to show the survey sponsor', async function (assert) {
      await render(hbs`
        <EmberCommunitySurvey::Sponsor
          @hasDarkBackground={{true}}
          @sponsor={{hash
            logoAlt="Code All Day"
            logoSrc="/images/survey/cad-right.svg"
            website="http://www.codeallday.com/"
          }}
        />
      `);

      assert
        .dom('[data-test-link="Sponsor Website"]')
        .hasAttribute(
          'href',
          'http://www.codeallday.com/',
          'We see the correct href for the sponsor website.'
        );

      assert
        .dom('[data-test-image="Sponsor Logo"]')
        .hasAttribute(
          'alt',
          'Code All Day',
          'We see the correct alt for the sponsor logo.'
        )
        .hasAttribute(
          'src',
          '/images/survey/cad-right.svg',
          'We see the correct src for the sponsor logo.'
        );
    });
  }
);
