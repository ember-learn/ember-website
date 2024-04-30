import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | teams', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(async function () {
    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('team-member');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:teams');
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

  test('We sort CLI team members by when they were first added', function (assert) {
    const { coreCLITeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = coreCLITeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, ['katie-gengler', 'kelly-selden']);
  });

  test('We sort Data team members by when they were first added', function (assert) {
    const { dataTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = dataTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'chris-thoburn',
      'scott-newcomer',
      'rich-glazerman',
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
      'chris-ng',
      'anne-greeth-schot-van-herwijnen',
      'ignace-maes',
    ]);
  });

  test('We sort Emertius team members by when they were first added', function (assert) {
    const { alumniTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = alumniTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(output, [
      'trek-glowacki',
      'erik-bryn',
      'kris-selden',
      'stefan-penner',
      'alex-matchneer',
      'robert-jackson',
      'igor-terzic',
      'martin-munoz',
      'brendan-mc-loughlin',
      'david-baker',
      'chad-hietala',
      'todd-jordan',
      'christoffer-persson',
      'dan-gebhardt',
      'clemens-muller',
      'stanley-stuart',
      'jacob-bixby',
      'nathan-hammond',
      'tobias-bieniek',
      'godfrey-chan',
      'krati-ahuja',
      'sivakumar-kailasam',
      'terence-lee',
      'jessica-jordan',
      'alex-navasardyan',
      'amy-lam',
      'kenneth-larsen',
      'david-hamilton',
      'kristen-hewell-garrett',
      'isaac-lee',
      'chris-krycho',
      'dan-freeman',
      'bert-de-block',
    ]);
  });
});
