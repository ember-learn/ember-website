import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class SponsorsRoute extends Route {
  model() {
    return hash({
      sponsors: this.store.findAll('sponsor'),
      initiativeSponsors: this.store.findAll('initiative-sponsor'),
    });
  }
}
