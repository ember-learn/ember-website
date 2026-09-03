import { getOwner } from '@ember/application';
import Controller from '@ember/controller';
import { type Registry as Services, service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import type Meetup from 'ember-website/models/meetup';
import type CommunityMeetupsIndexRoute from 'ember-website/routes/community/meetups';
import type { ModelFrom } from 'ember-website/utils/routes';

export default class CommunityMeetupsIndexController extends Controller {
  declare model: ModelFrom<CommunityMeetupsIndexRoute>;

  @service declare fastboot: Services['fastboot'];

  @tracked leafletPackageLoaded = false;

  leafletConfiguration = {
    latitude: 20,
    longitude: 0,
    zoom: 2,
  };

  get meetupsByArea(): {
    meetups: Meetup[];
    name: string;
  }[] {
    const meetups = (this.model ?? []).slice();
    const groupMeetupsByArea = new Map<
      string,
      {
        meetups: Meetup[];
        name: string;
      }
    >();

    meetups.forEach((meetup) => {
      const { area } = meetup;

      if (groupMeetupsByArea.has(area)) {
        const { meetups } = groupMeetupsByArea.get(area)!;
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
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);

    // @ts-expect-error: Incorrect type
    if (!this.fastboot.isFastBoot) {
      // @ts-expect-error: Incorrect type
      void import('leaflet').then(() => {
        if (this.isDestroyed || this.isDestroying) {
          return;
        }

        // @ts-expect-error: Incorrect type
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const config = getOwner(this).resolveRegistration('config:environment');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const prefix = config.rootURL;

        // @ts-expect-error: Incorrect type
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        L.Icon.Default.imagePath = `${prefix}assets/images/`;

        this.leafletPackageLoaded = true;
      });
    }
  }
}
