import Component from '@ember/component';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { pluralize } from 'ember-inflector';

export default Component.extend({
  tagName: '',
  router: service(),
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.set('config', config['survey']);
    if (!this.today) {
      this.set('today', Date.now());
    }
  },
  endOfSurveyDate: computed('config.endDate', function () {
    let dateRegex = /(\d{4})-(\d+)-(\d+)/g;
    // eslint-disable-next-line no-unused-vars
    let [_, year, month, day] = dateRegex.exec(this.config.endDate);
    return Date.UTC(year, month - 1, day);
  }),
  daysLeftText: computed('daysLeft', function () {
    if (this.daysLeft > 0) {
      return pluralize(this.daysLeft, 'day');
    } else {
      return 'today';
    }
  }),
  daysLeft: computed('today', function () {
    const MS_IN_A_DAY = 8.64e7;
    var diff = new Date(+this.endOfSurveyDate) - new Date(+this.today);
    return Math.ceil(diff / MS_IN_A_DAY);
  }),

  actions: {
    hide() {
      this.set('hide', true);
    },
  },
});
