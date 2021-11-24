import Controller from '@ember/controller';

export default class ReleasesIndexController extends Controller {
  get emberReleaseProject() {
    return this.model.find((project) => {
      return project.name === 'Ember' && project.channel === 'release';
    });
  }
}
