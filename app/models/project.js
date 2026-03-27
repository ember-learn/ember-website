import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr baseFileName;
  @attr changelogPath;
  @attr channel;
  @attr content;
  @attr('date') date;
  @attr debugFileName;
  @attr filter;
  @attr ignoreFiles;
  @attr lastRelease;
  @attr name;
  @attr repo;

  get lastReleaseChangelogUrl() {
    if (this.channel === 'canary' || !this.changelogPath) {
      return '';
    }

    return `https://github.com/${this.repo}/blob/v${this.lastRelease}/${this.changelogPath}`;
  }
}
