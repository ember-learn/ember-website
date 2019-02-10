import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
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
  this.route('zoey');
});

export default Router;
