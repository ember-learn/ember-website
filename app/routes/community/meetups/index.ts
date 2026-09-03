import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type Meetup from 'ember-website/models/meetup';

type Model = Meetup[];

export default class CommunityMeetupsIndexRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    return this.store.findAll<Meetup>('meetup');
  }
}
