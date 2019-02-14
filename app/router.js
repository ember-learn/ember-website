import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { inject as service } from '@ember/service';

const Router = EmberRouter.extend({
  navbar: service(),
  location: config.locationType,
  rootURL: config.rootURL,
  didTransition() {
    this._super(...arguments);
    this.navbar.closePopupMenu();
  }
});

Router.map(function() {
  this.route('about');
  this.route('blog', function() {});
  this.route('community', function() {
    this.route('meetups');
    this.route('meetups-getting-started');
  });
  this.route('documentation');
  this.route('ember-users');
  this.route('guidelines');
  this.route('learn', function() {
    this.route('examples');
  });
  this.route('legal');
  this.route('logos');
  this.route('meetup-assets');
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
  this.route('zoey');
  this.route('statusboard');
});

export default Router;
