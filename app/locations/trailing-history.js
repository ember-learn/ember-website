import HistoryLocation from '@ember/routing/history-location';
import { formatURLConditional } from 'ember-website/utils/format-url';

export default class TrailingHistoryLocation extends HistoryLocation {
  formatURL() {
    let url = super.formatURL(...arguments);

    return formatURLConditional(url);
  }
}
