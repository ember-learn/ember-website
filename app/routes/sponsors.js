import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class SponsorsRoute extends Route {
  @service store;

  model() {
    return hash({
      sponsors: this.store.findAll('sponsor'),
      initiativeSponsors: this.store.findAll('initiative-sponsor'),
    });
  }

  afterModel() {
    // ember-data runs flushAllPendingFetches using setTimeout, so outside of the Ember runloop.
    // Under prember this causes `Attempted to call store.adapterFor(), but the store instance has already been destroyed.`
    // So wait a bit
    return new Promise((resolve) => setTimeout(resolve, 10));
  }
}
