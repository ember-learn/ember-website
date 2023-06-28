import users from 'ember-website/mirage/data/users';

export default function loadDefaultScenario(server) {
  server.db.loadData({
    users,
  });
}
