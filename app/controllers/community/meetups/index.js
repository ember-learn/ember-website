import Controller from '@ember/controller';
import groupBy from 'ember-group-by';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';

export default class CommunityMeetupsIndexController extends Controller {
  @service fastboot;

  @groupBy('model', 'area') meetupsByArea;
  @tracked leafletPackageLoaded = false;
  @tracked lat = 20;
  @tracked lng = 0;
  @tracked zoom = 2;

  constructor() {
    super(...arguments);

    if (!this.fastboot?.isFastBoot) {
      import('leaflet').then(() => {
        if (this.isDestroyed || this.isDestroying) {
          return;
        }

        let prefix = '';
        const config = getOwner(this).resolveRegistration('config:environment');

        prefix = config.rootURL;
        L.Icon.Default.imagePath = `${prefix}assets/images/`;
        this.leafletPackageLoaded = true;
      });
    }
  }
}
