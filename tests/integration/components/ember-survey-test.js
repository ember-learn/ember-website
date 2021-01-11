import { render } from '@ember/test-helpers';
import Service from '@ember/service';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | ember-survey', function (hooks) {
  setupRenderingTest(hooks);

  let surveySelector = '.survey-reminder-wrapper';

  module('A survey is configured', function (hooks) {
    hooks.beforeEach(function () {
      this.owner.register('config:environment', {
        survey: {
          route: 'annual-survey',
          title: 'Our annual survey',
          endDate: '2019-03-12',
        },
      });
    });

    test("it renders when it's not the current survey page", async function (assert) {
      this.owner.register(
        'service:router',
        Service.extend({
          currentRouteName: 'mascots',
        })
      );

      await render(hbs`
        <EmberSurvey />
      `);

      assert.dom(surveySelector).exists();
    });

    module('on the survey page', function (hooks) {
      hooks.beforeEach(function () {
        this.owner.register(
          'service:router',
          Service.extend({
            currentRouteName: 'annual-survey',
          })
        );
      });

      test('it renders the time remaining to take the survey when it is the current survey page', async function (assert) {
        this.set('today', Date.UTC(2019, 2, 1));

        await render(hbs`
          <EmberSurvey
            @today={{this.today}}
          />
        `);

        assert
          .dom(surveySelector)
          .hasText('You have 11 days left to submit your response! x');
      });

      test('with one day left to submit', async function (assert) {
        this.set('today', Date.UTC(2019, 2, 11));

        await render(hbs`
          <EmberSurvey
            @today={{this.today}}
          />
        `);

        assert
          .dom(surveySelector)
          .hasText('You have 1 day left to submit your response! x');
      });

      test('with 0 days left to submit', async function (assert) {
        this.set('today', Date.UTC(2019, 2, 12));

        await render(hbs`
          <EmberSurvey
            @today={{this.today}}
          />
        `);

        assert
          .dom(surveySelector)
          .hasText('You have today left to submit your response! x');
      });
    });
  });

  module('A survey is not configured', function (hooks) {
    hooks.beforeEach(function () {
      this.owner.register('config:environment', {});
    });

    test("it doesn't render when there isn't a route", function (assert) {
      assert.dom(surveySelector).doesNotExist();
    });
  });
});
