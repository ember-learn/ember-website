import HistoryLocation from '@ember/routing/history-location';

export default class TrailingHistoryLocation extends HistoryLocation {
  formatURL() {
    let url = super.formatURL(...arguments);

    if (url.includes('#')) {
      return url.replace(/([^/])#(.*)/, '$1/#$2');
    }
    if (url.includes('?')) {
      return url.replace(/\/?$/, '');
    } else {
      return url.replace(/\/?$/, '/');
    }
  }
}
