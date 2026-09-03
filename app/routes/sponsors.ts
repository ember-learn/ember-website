import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type InitiativeSponsor from 'ember-website/models/initiative-sponsor';
import type Sponsor from 'ember-website/models/sponsor';
// @ts-expect-error: Incorrect type
import { hash } from 'rsvp';

type Model = {
  initiativeSponsors: InitiativeSponsor[];
  sponsors: Sponsor[];
};

export default class SponsorsRoute extends Route {
  @service declare store: Services['store'];

  model(): Model {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    return hash({
      sponsors: this.store.findAll<Sponsor>('sponsor'),
      initiativeSponsors:
        this.store.findAll<InitiativeSponsor>('initiative-sponsor'),
    });
  }
}
