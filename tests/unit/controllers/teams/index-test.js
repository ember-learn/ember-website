import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | teams/index', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(async function () {
    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('team-member');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:teams/index');
    this.controller.model = model;
  });

  test('We sort Steering team members by when they were first added', function (assert) {
    const { steeringCommitteeMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = steeringCommitteeMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'yehuda-katz',
      'leah-silber',
      'matthew-beale',
      'edward-faulkner',
      'katie-gengler',
      'melanie-sumner',
      'kenigbolo-meya-stephen',
    ]);
  });

  test('We sort Core team members by when they were first added', function (assert) {
    const { coreTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = coreTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'yehuda-katz',
      'tom-dale',
      'peter-wagenet',
      'leah-silber',
      'matthew-beale',
      'edward-faulkner',
      'ricardo-mendes',
      'katie-gengler',
      'melanie-sumner',
    ]);
  });

  test('We sort Tooling team members by when they were first added', function (assert) {
    const { coreToolingTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = coreToolingTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'peter-wagenet',
      'edward-faulkner',
      'katie-gengler',
      'kelly-selden',
      'chris-manson',
      'james-davis',
      'krystan-huffmenne',
      'preston-sego',
      'simon-ihmig',
      'liam-potter',
    ]);
  });

  test('We sort Data team members by when they were first added', function (assert) {
    const { dataTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = dataTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'chris-thoburn',
      'krystan-huffmenne',
      'rich-glazerman',
      'kirill-shaplyko',
    ]);
  });

  test('We sort Learning team members by when they were first added', function (assert) {
    const { learningTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = learningTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'leah-silber',
      'ricardo-mendes',
      'jen-weber',
      'chris-manson',
      'robbie-wagner',
      'jared-galanis',
      'anne-greeth-schot-van-herwijnen',
      'ignace-maes',
    ]);
  });
});
