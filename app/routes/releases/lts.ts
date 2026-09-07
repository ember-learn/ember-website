import Route from '@ember/routing/route';
import type Project from 'ember-website/models/project';
import type ReleasesRoute from 'ember-website/routes/releases';
import type { ModelFrom } from 'ember-website/utils/routes';

type Model = {
  ember: Project;
  emberData: Project;
};

export default class ReleasesLtsRoute extends Route {
  model(): Model {
    const releases = this.modelFor('releases') as ModelFrom<ReleasesRoute>;

    const ember = releases.find(({ id }) => id === 'ember/lts')!;
    const emberData = releases.find(({ id }) => id === 'emberData/lts')!;

    return { ember, emberData };
  }
}
