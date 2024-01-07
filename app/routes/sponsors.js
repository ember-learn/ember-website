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
}
