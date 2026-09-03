import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type Showcase from 'ember-website/models/showcase';

type Model = Showcase[];

export default class LearnRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    return this.store.findAll<Showcase>('showcase');
  }
}
