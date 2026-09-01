import Route from '@ember/routing/route';
import fetch from 'fetch';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class ReleasesCanaryRoute extends Route {
  @service store;

  model() {
    return hash({
      ember: this.store.findRecord('project', 'ember/canary'),
      emberData: this.store.findRecord('project', 'emberData/canary'),
      canaryInfo: fetch(
        'https://s3.amazonaws.com/builds.emberjs.com/canary.json'
      ).then((response) => response.json()),
    });
  }
}
