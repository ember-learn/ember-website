import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'ember-qunit';
import teamMembers from 'ember-website/mirage/data/team-members';
import { module, test } from 'qunit';

module('Unit | Controller | teams', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    // Create data
    this.server.db.loadData({ teamMembers });

    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('team-member');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:teams');
    this.controller.model = model;
  });

  test('We sort Steering team members by surname, then by given name', function (assert) {
    const { steeringCommitteeMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = steeringCommitteeMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(
      output,
      [
        'tom-dale',
        'edward-faulkner',
        'katie-gengler',
        'yehuda-katz',
        'leah-silber',
      ],
      'We get the correct output.'
    );
  });

  test('We sort Core team members by surname, then by given name', function (assert) {
    const { coreTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = coreTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(
      output,
      [
        'matthew-beale',
        'godfrey-chan',
        'tom-dale',
        'edward-faulkner',
        'chris-garrett',
        'dan-gebhardt',
        'katie-gengler',
        'chad-hietala',
        'robert-jackson',
        'yehuda-katz',
        'ricardo-mendes',
        'kris-selden',
        'leah-silber',
        'melanie-sumner',
        'igor-terzic',
      ],
      'We get the correct output.'
    );
  });

  test('We sort CLI team members by surname, then by given name', function (assert) {
    const { coreCLITeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = coreCLITeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(
      output,
      [
        'krati-ahuja',
        'katie-gengler',
        'robert-jackson',
        'alex-navasardyan',
        'kelly-selden',
      ],
      'We get the correct output.'
    );
  });

  test('We sort Data team members by surname, then by given name', function (assert) {
    const { dataTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = dataTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(
      output,
      [
        'dan-gebhardt',
        'david-hamilton',
        'robert-jackson',
        'igor-terzic',
        'chris-thoburn',
      ],
      'We get the correct output.'
    );
  });

  test('We sort Learning team members by surname, then by given name', function (assert) {
    const { learningTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = learningTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(
      output,
      [
        'jared-galanis',
        'jessica-jordan',
        'amy-lam',
        'kenneth-larsen',
        'isaac-lee',
        'chris-manson',
        'ricardo-mendes',
        'leah-silber',
        'robert-wagner',
        'jen-weber',
      ],
      'We get the correct output.'
    );
  });

  test('We sort Emertius team members by surname, then by given name', function (assert) {
    const { alumniTeamMembers } = this.controller;

    // Create an intermediate data structure for assertion
    const output = alumniTeamMembers.map((teamMember) => teamMember.id);

    assert.deepEqual(
      output,
      [
        'david-baker',
        'tobias-bieniek',
        'jacob-bixby',
        'erik-bryn',
        'trek-glowacki',
        'nathan-hammond',
        'todd-jordan',
        'sivakumar-kailasam',
        'terence-lee',
        'alex-matchneer',
        'brendan-mc-loughlin',
        'clemens-muller',
        'martin-munoz',
        'stefan-penner',
        'christoffer-persson',
        'stanley-stuart',
        'peter-wagenet',
      ],
      'We get the correct output.'
    );
  });
});
