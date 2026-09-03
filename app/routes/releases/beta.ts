import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type Project from 'ember-website/models/project';
// @ts-expect-error: Incorrect type
import { hash } from 'rsvp';

type Model = {
  ember: Project;
  emberData: Project;
};

export default class ReleasesBetaRoute extends Route {
  @service declare store: Services['store'];

  model(): Model {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    return hash({
      ember: this.store.findRecord<Project>('project', 'ember/beta'),
      emberData: this.store.findRecord<Project>('project', 'emberData/beta'),
    });
  }
}
