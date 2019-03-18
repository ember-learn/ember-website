import EmberRouter from '@ember/routing/router';
import config from './config/environment';

import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend({
  navbar: service(),
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),
  fastboot: service(),

  didTransition() {
    this._super(...arguments);
    this.navbar.closePopupMenu();
    this._trackPage();
  },

  _trackPage() {
    if(get(this, 'fastboot.isFastBoot')) {
      return;
    }

    scheduleOnce('afterRender', this, () => {
      const page = this.url;
      const title = this.getWithDefault('currentRouteName', 'unknown');

      // this is constant for this app and is only used to identify page views in the GA dashboard
      const hostname = 'www.emberjs.com';

      this.metrics.trackPage({ page, title, hostname });
    });
  },
});

Router.map(function() {
  this.route('blog', function() {});
  this.route('community', function() {
    this.route('meetups', function() {
      this.route('assets');
    });
    this.route('meetups-getting-started');
  });
  this.route('ember-users');
  this.route('guidelines');
  this.route('learn', function() {
    this.route('examples');
  });
  this.route('about', function() {
    this.route('legal');
  });
  this.route('logos');
  this.route('releases', function() {
    this.route('release');
    this.route('beta');
    this.route('canary');
  });
  this.route('security');
  this.route('sponsors');
  this.route('team');

  this.route('mascots', function() {
    this.route('commission-sent');
    this.route('commission');
    this.route('faq');
    this.route('payment-sent');
    this.route('payment');
  });
  this.route('statusboard');
  this.route('ember-community-survey-2016');
  this.route('ember-community-survey-2017');
  this.route('ember-community-survey-2018');
  this.route('ember-community-survey-2019');

  this.route('editions', function() {
    this.route('octane');
  });
});

export default Router;
