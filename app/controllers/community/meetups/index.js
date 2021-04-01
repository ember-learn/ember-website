import { getOwner } from '@ember/application';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CommunityMeetupsIndexController extends Controller {
  @service fastboot;

  @tracked leafletPackageLoaded = false;

  leafletConfiguration = {
    latitude: 20,
    longitude: 0,
    zoom: 2,
  };

  get meetupsByArea() {
    const meetups = (this.model ?? []).toArray();
    const groupMeetupsByArea = new Map();

    meetups.forEach((meetup) => {
      const { area } = meetup;

      if (groupMeetupsByArea.has(area)) {
        let { meetups } = groupMeetupsByArea.get(area);
        meetups.push(meetup);
      } else {
        groupMeetupsByArea.set(area, {
          meetups: [meetup],
          name: area,
        });
      }
    });

    return Array.from(groupMeetupsByArea.values());
  }

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
