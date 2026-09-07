import Route from '@ember/routing/route';
import type Project from 'ember-website/models/project';
import type ReleasesRoute from 'ember-website/routes/releases';
import type { ModelFrom } from 'ember-website/utils/routes';

type Model = {
  ember: Project;
  emberData: Project;
};

export default class ReleasesReleaseRoute extends Route {
  model(): Model {
    const releases = this.modelFor('releases') as ModelFrom<ReleasesRoute>;

    const ember = releases.find(({ id }) => id === 'ember/release')!;
    const emberData = releases.find(({ id }) => id === 'emberData/release')!;

    return { ember, emberData };
  }
}
