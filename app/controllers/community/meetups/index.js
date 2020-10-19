import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import groupBy from 'ember-group-by';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default Controller.extend({
  fastboot: service(),

  init() {
    this._super(...arguments);
    
    if (!this.fastboot?.isFastBoot) {
      
      import('leaflet')
      .then(() => {
        let prefix = '';
        const config = getOwner(this).resolveRegistration('config:environment');
        
        prefix = config.rootURL;
        L.Icon.Default.imagePath = `${prefix}assets/images/`;
        this.set('leafletPackageLoaded', true)
      });
    }
  },

  lat: 20,
  lng: 0,
  zoom: 2,
  meetupsByArea: groupBy('model', 'area'),
  sortingKeys: Object.freeze(['items.length:desc']),
  sortedMeetupsByArea: sort('meetupsByArea', 'sortingKeys'),
});
