import { inTeam } from 'ember-website/utils/teams/in-team';
import { module, test } from 'qunit';

module('Unit | Utility | teams/in-team', function () {
  module('inTeam', function () {
    test('it works', function (assert) {
      const filterFunction = inTeam('alumni');

      const teamMember1 = {};

      const teamMember2 = {
        teams: [],
      };

      const teamMember3 = {
        teams: ['learning'],
      };

      const teamMember4 = {
        teams: ['alumni'],
      };

      assert.false(filterFunction(teamMember1));
      assert.false(filterFunction(teamMember2));
      assert.false(filterFunction(teamMember3));
      assert.true(filterFunction(teamMember4));
    });
  });
});
