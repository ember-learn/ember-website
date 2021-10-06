import HistoryLocation from '@ember/routing/history-location';
import { formatURL } from 'ember-website/utils/format-url';

export default class TrailingHistoryLocation extends HistoryLocation {
  formatURL() {
    let url = super.formatURL(...arguments);

    return formatURL(url);
  }
}
