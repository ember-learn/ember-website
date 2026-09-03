import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class MascotsIndexController extends Controller {
  queryParams = ['filter', 'display'];

  @tracked filter = 'all';
  @tracked display = 'small';

  get filteredMascots() {
    const mascots = this.model ?? [];
    const { filter } = this;

    if (!filter || filter === 'all') {
      return mascots;
    }

    return mascots.filter((mascot) => mascot.tags.includes(filter));
  }
}
