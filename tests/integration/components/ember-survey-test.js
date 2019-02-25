import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | ember-survey', function(hooks) {
  setupRenderingTest(hooks);

  let template = hbs`{{ember-survey}}`;
  let surveySelector = '.survey-reminder-wrapper';

  module('A survey is configured', function(hooks) {
    hooks.beforeEach(function() {
      this.owner.register('config:environment', {
        survey: {
          route: 'annual-survey',
          title: 'Our annual survey'
        }
      })
    });

    test("it renders when it's not the current survey page", async function(assert) {
      this.owner.register('service:router', Service.extend({
        currentRouteName: 'mascots'
      }));
      await render(template);
      assert.dom(surveySelector).exists();
    });

    test("it doesn't render when it is the current survey page", async function(assert) {
      this.owner.register('service:router', Service.extend({
        currentRouteName: 'annual-survey'
      }));
      await render(template);
      assert.dom(surveySelector).doesNotExist();
    });
  });

  module('A survey is not configured', function(hooks) {
    hooks.beforeEach(function() {
      this.owner.register('config:environment', {});
    });

    test("it doesn't render when there isn't a route", function(assert) {
      assert.dom(surveySelector).doesNotExist();
    });
  });
});
