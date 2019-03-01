import Component from '@ember/component';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import {computed } from '@ember/object';
import { pluralize } from 'ember-inflector';

export default Component.extend({
  tagName: '',
  router: service(),
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.config = config['survey'];
    if (!this.today) {
      this.set('today', Date.now());
    }
  },
  daysLeftText: computed('daysLeft', function() {
    if (this.daysLeft > 0) {
      return pluralize(this.daysLeft, 'day');
    } else {
      return 'today';
    }
  }),
  daysLeft: computed('today', function() {
    const MS_IN_A_DAY = 8.64e7;
    const END_DATE_OF_SURVEY = Date.UTC(2019, 2, 12);
    var diff = new Date(+END_DATE_OF_SURVEY) - new Date(+this.today);
    return Math.ceil(diff / MS_IN_A_DAY );
  }),
});