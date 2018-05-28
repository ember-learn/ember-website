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
});

export default Router;
