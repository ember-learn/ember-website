import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type Project from 'ember-website/models/project';
// @ts-expect-error: Incorrect type
import fetch from 'fetch';
// @ts-expect-error: Incorrect type
import { hash } from 'rsvp';

type CanaryInfo = {
  SHA: string;
  assetPath: string;
  buildType: 'canary';
  version: string;
};

type Model = {
  canaryInfo: CanaryInfo;
  ember: Project;
  emberData: Project;
};

export default class ReleasesCanaryRoute extends Route {
  @service declare store: Services['store'];

  model(): Model {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    return hash({
      ember: this.store.findRecord<Project>('project', 'ember/canary'),
      emberData: this.store.findRecord<Project>('project', 'emberData/canary'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      canaryInfo: fetch(
        'https://s3.amazonaws.com/builds.emberjs.com/canary.json',
        // @ts-expect-error: Incorrect type
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      ).then((response) => response.json()),
    });
  }
}
