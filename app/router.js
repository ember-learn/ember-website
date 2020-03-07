import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

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
    this.route('lts');
  });
  this.route('security');
  this.route('sponsors');
  this.route('team-redirect', { path: 'team' });
  this.route('team', { path: 'teams' });

  this.route('mascots', function() {
    this.route('commission-sent');
    this.route('commission');
    this.route('faq');
    this.route('payment-sent');
    this.route('payment');
  });

  this.route('ember-community-survey-2016');
  this.route('ember-community-survey-2017');
  this.route('ember-community-survey-2018');
  this.route('ember-community-survey-2019');
  this.route('ember-community-survey-2020');

  this.route('editions', function() {
    this.route('octane');
  });
});
