import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class MascotsIndexController extends Controller {
  queryParams = ['filter', 'display'];
  @tracked filter = 'all';
  @tracked display = 'small';
}
