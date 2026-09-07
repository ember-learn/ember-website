import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type InitiativeSponsor from 'ember-website/models/initiative-sponsor';
import type Sponsor from 'ember-website/models/sponsor';

type Model = {
  initiativeSponsors: InitiativeSponsor[];
  sponsors: Sponsor[];
};

export default class SponsorsRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    const initiativeSponsors =
      await this.store.findAll<InitiativeSponsor>('initiative-sponsor');

    const sponsors = await this.store.findAll<Sponsor>('sponsor');

    return { initiativeSponsors, sponsors };
  }
}
