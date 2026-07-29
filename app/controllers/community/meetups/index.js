import Controller from '@ember/controller';

// TODO: Replace with ember-maplibre-gl
export default class CommunityMeetupsIndexController extends Controller {
  get meetupsByArea() {
    const meetups = (this.model ?? []).slice();
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
}
