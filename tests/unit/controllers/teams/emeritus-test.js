import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | teams/emeritus', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(async function () {
    // Run model hook
    const store = this.owner.lookup('service:store');
    const model = await store.findAll('team-member');

    // Run setupController hook
    this.controller = this.owner.lookup('controller:teams/emeritus');
    this.controller.model = model;
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
      'chris-ng',
      'bert-de-block',
      'scott-newcomer',
      'aaron-chambers',
      'peter-meehan',
    ]);
  });
});
