import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type Tomster from 'ember-website/models/tomster';

type Model = Tomster[];

export default class MascotsRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    return this.store.findAll<Tomster>('tomster');
  }
}
