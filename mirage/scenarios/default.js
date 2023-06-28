import tomsters from 'ember-website/mirage/data/tomsters';
import users from 'ember-website/mirage/data/users';

export default function loadDefaultScenario(server) {
  server.db.loadData({
    tomsters,
    users,
  });
}
