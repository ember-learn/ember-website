import Model, { attr } from '@ember-data/model';
import type { Type } from '@warp-drive/core-types/symbols';

export default class ProjectModel extends Model {
  declare [Type]: 'project';

  @attr declare baseFileName: string;
  @attr declare changelogPath: string;
  @attr declare channel: string;
  @attr declare content: string;
  @attr('date') declare date: Date;
  @attr declare debugFileName: string;
  @attr declare filter: string;
  @attr declare ignoreFiles: string[];
  @attr declare lastRelease: string;
  @attr declare name: string;
  @attr declare repo: string;

  get lastReleaseChangelogUrl(): string {
    if (this.channel === 'canary' || !this.changelogPath) {
      return '';
    }

    return `https://github.com/${this.repo}/blob/v${this.lastRelease}/${this.changelogPath}`;
  }
}
