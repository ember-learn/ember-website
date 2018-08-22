import Route from '@ember/routing/route';
import fetch from 'ember-fetch/ajax';
import config from 'ember-website/config/environment';

export default Route.extend({
  model() {
    return fetch(`${config.host}/data/showcase.json`);
  }
});
