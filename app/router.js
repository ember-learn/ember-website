import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('community', function() {
    this.route('meetups');
    this.route('meetups-getting-started');
  });
  this.route('learn', function() {
    this.route('examples');
  });
  this.route('security');
  this.route('sponsors');
  this.route('meetup-assets');
  this.route('mascots');
  this.route('logos');
  this.route('legal');
  this.route('guidelines');
  this.route('ember-users');
  this.route('documentation');
  this.route('about');
  this.route('zoey');
  this.route('tomster', function() {
    this.route('commission');
    this.route('faq');
    this.route('payment');
    this.route('payment-sent');
    this.route('commission-sent');
  });
});

export default Router;
