import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

let store;

let expectedReleaseDates = {
  '3.21.0': new Date('2020-08-24 12:00:00 GMT'),
  '3.22.0': new Date('2020-10-05 12:00:00 GMT'),
  '3.23.0': new Date('2020-11-16 12:00:00 GMT'),
  '3.24.0': new Date('2020-12-28 12:00:00 GMT'),
  '3.25.0': new Date('2021-02-08 12:00:00 GMT'),
  '3.26.0': new Date('2021-03-22 12:00:00 GMT'),
  '3.27.0': new Date('2021-05-03 12:00:00 GMT'),
  '3.28.0': new Date('2021-06-14 12:00:00 GMT')
};

module('Integration | Data | releases', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    store = this.owner.lookup('service:store');
  });

  test('ember beta dates are correct', async function(assert) {
    let data = await store.find('project', 'ember/beta');

    assert.ok(data.cycleEstimatedFinishDate.getDay() === 1, `${data.cycleEstimatedFinishDate} should be a Monday`);

    let nextVersion = data.finalVersion;
    let nextExpectedRelease = expectedReleaseDates[nextVersion];

    assert.ok(data.cycleEstimatedFinishDate.toString() === nextExpectedRelease.toString(), `the next expected release should be on ${nextExpectedRelease} but we have set ${data.cycleEstimatedFinishDate}`);
  })
});
