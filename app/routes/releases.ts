import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type Project from 'ember-website/models/project';

type Model = Project[];

export default class ReleasesRoute extends Route {
  @service declare store: Services['store'];

  async model(): Promise<Model> {
    return this.store.findAll<Project>('project');
  }
}
