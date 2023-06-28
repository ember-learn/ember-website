import meetups from 'ember-website/mirage/data/meetups';
import showcases from 'ember-website/mirage/data/showcases';
import tomsters from 'ember-website/mirage/data/tomsters';
import users from 'ember-website/mirage/data/users';

export default function loadDefaultScenario(server) {
  server.db.loadData({
    meetups,
    showcases,
    tomsters,
    users,
  });
}
