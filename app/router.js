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
  this.route('mascots');
  this.route('meetup-assets');
  this.route('security');
  this.route('sponsors');
  this.route('team');
  this.route('tomster', function() {
    this.route('commission-sent');
    this.route('commission');
    this.route('faq');
    this.route('payment-sent');
    this.route('payment');
  });
  this.route('zoey');
  this.route('deprecations', function() {
    this.route('ember-data', function() {
      this.route('v2', { path: 'v2.x' });
    });
    this.route('ember-cli', function() {
      this.route('v2', { path: 'v2.x' });
    });
    this.route('ember', function() {
      this.route('v1', { path: 'v1.x' });
      this.route('v2', { path: 'v2.x' });
      this.route('v3', { path: 'v3.x' });
    });
  });
});

export default Router;
