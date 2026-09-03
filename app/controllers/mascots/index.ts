import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import type Tomster from 'ember-website/models/tomster';
import type MascotsRoute from 'ember-website/routes/mascots';
import type { ModelFrom } from 'ember-website/utils/routes';

type Display = 'small' | 'large';

type Filter =
  'all' | 'conference' | 'corp' | 'meetup' | 'other' | 'tomster' | 'zoey';

export default class MascotsIndexController extends Controller {
  declare model: ModelFrom<MascotsRoute>;

  queryParams = ['filter', 'display'];

  @tracked filter?: Filter = 'all';
  @tracked display: Display = 'small';

  get filteredMascots(): Tomster[] {
    const mascots = this.model ?? [];
    const { filter } = this;

    if (!filter || filter === 'all') {
      return mascots;
    }

    return mascots.filter((mascot) => mascot.tags.includes(filter));
  }
}
