import EmberRouter from '@ember/routing/router';
import config from 'ember-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', function () {
    this.route('legal');
  });

  this.route('browser-support');

  this.route('community', function () {
    this.route('black-lives-matter');
    this.route('meetups', function () {
      this.route('assets');
    });
    this.route('meetups-getting-started');
    this.route('invasion-of-ukraine');
  });

  this.route('editions', function () {
    this.route('octane');
  });

  this.route('ember-users');

  this.route('guidelines');

  this.route('learn', function () {
    this.route('examples');
  });

  this.route('logos');

  this.route('mascots', function () {
    this.route('commission');
    this.route('commission-sent');
    this.route('faq');
    this.route('payment');
    this.route('payment-sent');
  });

  this.route('not-found', { path: '/*path' });

  this.route('releases', function () {
    this.route('beta');
    this.route('canary');
    this.route('lts');
    this.route('release');
  });

  this.route('security');

  this.route('sponsors');

  this.route('survey', function () {
    this.route('2016');
    this.route('2017');
    this.route('2018');
    this.route('2019');
    this.route('2020');
    this.route('2021');
    this.route('2022');
  });

  this.route('team-redirect', { path: 'team' });
  this.route('teams');
});
